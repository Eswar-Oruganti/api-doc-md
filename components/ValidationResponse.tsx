export function ValidationResponse({ children }) {
  const parsedJson = JSON.parse(children.props.children);
  let validations = parsedJson.validations;

  try {
    if (!Array.isArray(validations)) {
      throw new Error("Expected an array of validation responses");
    }
  } catch (error) {
    validations = ["Invalid JSON"];
  }

  function renderJson(value, indent = 0) {
    if (typeof value === "string") {
      return <span style={{ color: "#2B7610" }}>&quot;{value}&quot;</span>;
    }
    if (typeof value === "number") {
      return <span style={{ color: "#C97957" }}>{value}</span>;
    }
    if (typeof value === "boolean" || value === null) {
      return <span style={{ color: "#3D7FD9" }}>{String(value)}</span>;
    }
    if (Array.isArray(value)) {
      return (
        <div style={{ marginLeft: `${indent * 12}px` }}>
          [
          <div style={{ paddingLeft: "12px" }}>
            {value.map((item, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}>
                {renderJson(item, indent + 1)}
                {index < value.length - 1 ? "," : ""}
              </div>
            ))}
          </div>
          ]
        </div>
      );
    }
    if (typeof value === "object") {
      return (
        <div style={{ marginLeft: `${indent * 12}px` }}>
          {"{"}
          <div style={{ paddingLeft: "12px" }}>
            {Object.entries(value).map(([key, val], index, arr) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  marginBottom: "4px",
                  alignItems: "flex-start",
                }}>
                <span style={{ marginRight: "5px" }}>&quot;{key}&quot;:</span>
                {renderJson(val, indent + 1)}
                {index < arr.length - 1 ? "," : ""}
              </div>
            ))}
          </div>
          {"}"}
        </div>
      );
    }
    return null;
  }

  return (
    <div className="validation-card">
      <div className="validation-title">VALIDATIONS</div>
      <div className="validation-content">
        {validations.map((response, index) => (
          <div key={index}>
            <div className="validation-item">{renderJson(response)}</div>
            {index < validations.length - 1 && (
              <hr className="validation-separator" />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .validation-card {
          font-size: 14px;
          font-family: monospace;
          max-width: 100%;
          border: 1px solid var(--border-color-primary);
          border-radius: 8px;
          overflow: hidden;
          background-color: var(--background-level1);
        }

        .validation-title {
          width: 100%;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 12px;
          background: var(--background-level2);
          border-bottom: 1px solid var(--border-color-primary);
        }

        .validation-content {
          padding: 8px 16px;
          max-width: 100%;
          overflow-x: auto;
        }

        .validation-item {
          margin-bottom: 12px;
          padding: 8px;
          border-radius: 6px;
        }

        .validation-separator {
          border: none;
          height: 1px;
          background-color: var(--border-color-primary);
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
}
