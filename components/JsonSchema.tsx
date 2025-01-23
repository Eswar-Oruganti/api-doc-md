import * as React from "react";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function JsonSchema({ children }) {
  const obj = JSON.parse(children.props.children);
  const properties = obj.properties;

  return (
    <div className="jsonschema">
      {(Object.entries(properties) as Entries<typeof properties>).map(
        ([key, value]) => {
          return (
            <div className="prop" key={key}>
              <div className="schema-title">
                <h6>{key}</h6>
                <p>{value.type}</p>
                {value.required && <p className="required">required</p>}
              </div>
              <p>{value.description}</p>
            </div>
          );
        }
      )}
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
