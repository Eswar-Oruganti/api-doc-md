import * as React from "react";

export function JsonSchema({ children }) {
  const obj = JSON.parse(children.props.children);
  const properties = obj.properties;

  return (
    <div className="jsonschema">
      {Object.entries(properties).map((prop) => {
        const [key, values] = prop;
        return (
          <div className="prop" key={key}>
            <div className="schema-title">
              <h6>{key}</h6>
              <p>{values.type}</p>
              {values.required && <p className="required">required</p>}
            </div>
            <p>{values.description}</p>
          </div>
        );
      })}
      <style jsx>{`
        .jsonschema {
          padding: 2px 10px;
          display: flex;
          flex-direction: column;
          row-gap: 10px;
        }

        .jsonschema p,
        h6 {
          margin: 0;
          font-size: 16px;
        }

        .jsongschema h6 {
          font-weight: 700;
        }

        .jsonschema .required {
          color: #aa0000;
        }

        .schema-title {
          display: flex;
          column-gap: 4px;
          align-items: baseline;
        }

        .prop + prop {
          border-top: 1px solid black;
        }
      `}</style>
    </div>
  );
}
