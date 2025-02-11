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
      <style jsx>{styles}</style>
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

const styles = `
  .jsonschema p, h2, h6 { margin: 0; }

  .schema-heading {
  padding-bottom :16px;
    margin: 24px 0;
    font-size: 16px;
    font-weight: 600;
  }

  .attribute {
    padding: 10px 0;
    border-top: 1px solid #D8DEE4;
  }

  .schema-title {
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  .attribute-name {
    font-size: 14px;
    font-weight: 700;
  }

  .attribute-type {
    font-size: 12px;
    color: rgb(89, 97, 113);
  }
  .attribute-required {
    font-size: 12px;
    font-weight: 600;
    color: rgb(177, 54, 0);
  }

  .attribute-description {
    font-size: 14px;
  }

 
  .collapsible-trigger {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #596171;
    cursor: pointer;
    background: none;
    border: 1px solid #D8DEE4;
    border-radius: 8px;
    padding: 6px 8px;
  }
  .chevron {
    transition: transform 0.2s ease-in-out;
  }
  .chevron.rotate {
    transform: rotate(180deg);
  }

  .collapsible-content {
    margin-top: 16px;
    padding-left: 16px;
  }
`;
