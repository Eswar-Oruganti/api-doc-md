import * as React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type ResponseProperty = {
  type: string;
  description?: string;
  required?: boolean;
  properties?: Record<string, ResponseProperty>; // Handling nested objects
};

type ResponseSchema = {
  properties: Record<string, ResponseProperty>;
};

export function ResponseParameters({ children }) {
  let properties: Record<string, ResponseProperty> = {};

  try {
    const obj: ResponseSchema = JSON.parse(children.props?.children);
    properties = obj.properties ?? {};
  } catch (error) {
    console.error("Failed to parse JSON response schema:", error);
  }

  return (
    <div className="jsonschema">
      <p className="schema-heading">Response Parameters</p>
      {Object.entries(properties).map(([key, value]) => (
        <ResponseAttribute key={key} name={key} schema={value} />
      ))}
    </div>
  );
}

function ResponseAttribute({
  name,
  schema,
}: {
  name: string;
  schema: ResponseProperty;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="attribute">
      <div className="schema-title">
        <h6 className="attribute-name">{name}</h6>
        <p className="attribute-type">{schema.type ?? "Unknown"}</p>
        {schema.required && <p className="attribute-required">Required</p>}
      </div>
      <p className="attribute-description">
        {schema.description ?? "No description provided."}
      </p>

      {/* Nested object handling */}
      {schema.type === "object" && schema.properties && (
        <Collapsible.Root
          open={open}
          onOpenChange={setOpen}
          className="collapsible">
          <Collapsible.Trigger className="collapsible-trigger">
            Show Child Attributes
            <ChevronDownIcon className={`chevron ${open ? "rotate" : ""}`} />
          </Collapsible.Trigger>
          <Collapsible.Content className="collapsible-content">
            {Object.entries(schema.properties).map(([subKey, subValue]) => (
              <div key={subKey} className="attribute">
                <div className="schema-title">
                  <h6 className="attribute-name">{subKey}</h6>
                  <p className="attribute-type">{subValue.type ?? "Unknown"}</p>
                  {subValue.required && (
                    <p className="attribute-required">Required</p>
                  )}
                </div>
                <p className="attribute-description">
                  {subValue.description ?? "No description provided."}
                </p>
              </div>
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </div>
  );
}
