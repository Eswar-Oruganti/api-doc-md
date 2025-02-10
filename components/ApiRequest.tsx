import { useRef, useState } from "react";
import { CodeBlock } from "./CodeBlock";

export function ApiRequest({ children }) {
  const languages = children.map((item) => item.props["data-language"]);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const codeRef = useRef<{ getCode: () => string } | null>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.getCode();
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
      });
    }
  };

  return (
    <div className="api-request">
      {/* Header with Title, Language Selector & Copy Button */}
      <div className="api-header">
        <span className="api-title">API REQUEST</span>
        <div className="header-controls">
          <select
            className="language-selector"
            value={activeLang}
            onChange={(e) => setActiveLang(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang} className="select-option">
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
          <button className="copy-btn" onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code Block - Show active language's code */}
      <div className="api-content">
        {children.map((child) =>
          child.props["data-language"] === activeLang ? (
            <CodeBlock
              key={child.props["data-language"]}
              ref={codeRef}
              data-language={activeLang}>
              {child.props.children}
            </CodeBlock>
          ) : null
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .api-request {
          font-family: monospace;
          max-width: 100%;
          border: 1px solid rgb(216, 222, 228);
          border-radius: 8px;
          overflow: hidden;
          background: #2a2734;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
        }

        .api-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 12px;
          background: #ebeef1;
          border-bottom: 1px solid rgb(216, 222, 228);
        }

        .header-controls {
          display: flex;
          gap: 8px;
        }

        .api-title {
          font-size: 12px;
          font-weight: bold;
        }

        .language-selector {
          padding: 4px 8px;
          font-size: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #2b3039;
          color: white;
          cursor: pointer;
        }

        .copy-btn {
          padding: 4px 8px;
          font-size: 12px;
          background: ${copied ? "#28a745" : "#007bff"};
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .copy-btn:hover {
          background: ${copied ? "#218838" : "#0056b3"};
        }

        .api-content {
          max-width: 100%;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
