import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { CheckCircledIcon, CopyIcon } from "@radix-ui/react-icons"; // Import icons

interface RequestData {
  url: string;
  headers: Record<string, string>;
  body: Record<string, any>;
}

const templates = {
  js: ({ url, body }: RequestData) => `fetch("${url}", {
  method: "POST",
  body: ${JSON.stringify(body, null, 2)}
});`,

  curl: ({ url, body }: RequestData) => `curl -X POST "${url}" \\
  -d '${JSON.stringify(body, null, 2)}'`,

  python: ({ url, body }: RequestData) => `import requests

url = "${url}"
data = ${JSON.stringify(body, null, 2)}

response = requests.post(url, json=data)`,
};

export function ApiRequest({ children }) {
  const data = JSON.parse(children.props.children);
  const languages = Object.keys(templates);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const code = templates[activeLang as keyof typeof templates](data);
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="api-request">
      <div className="api-header">
        <span className="api-title">API REQUEST</span>
        <div className="header-controls">
          <select
            className="language-selector"
            value={activeLang}
            onChange={(e) => setActiveLang(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
          <button className="copy-btn" onClick={copyToClipboard}>
            {copied ? (
              <CheckCircledIcon width={16} height={16} />
            ) : (
              <CopyIcon width={16} height={16} />
            )}
          </button>
        </div>
      </div>

      <div className="api-content">
        <CodeBlock data-language={activeLang}>
          {templates[activeLang as keyof typeof templates](data)}
        </CodeBlock>
      </div>

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
          align-items: center;
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
          padding: 4px;
          font-size: 12px;
          background: transparent;
          border: none;
          color: #007bff;
          cursor: pointer;
          transition: color 0.2s;
        }

        .copy-btn:hover {
          color: #0056b3;
        }

        .api-content {
          max-width: 100%;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
