export function Response({ children }) {
  let parsedJson;

  try {
    const jsonString = Array.isArray(children.props.children)
      ? children.props.children.join("").trim()
      : children.props.children;

    parsedJson = JSON.parse(jsonString);
  } catch (error) {
    parsedJson = "Invalid JSON";
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
    <div className="response-card">
      <div className="response-title">RESPONSE</div>
      <div className="response-content">{renderJson(parsedJson)}</div>

      <style jsx>{`
        .response-card {
          font-size: 14px;
          font-family: monospace;
          max-width: 100%;
          border: 1px solid rgb(216, 222, 228);
          border-radius: 8px;
          overflow: hidden;
        }

        .response-title {
          width: 100%;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 12px;
          background: #ebeef1;
          border-bottom: 1px solid rgb(216, 222, 228);
        }

        .response-content {
          padding: 8px 16px;
          max-width: 100%;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
