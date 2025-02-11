export const CustomTable = ({ children, primary }) => {
  const data = JSON.parse(children.props.children);
  const { headers, rows } = data;

  // Find the column index of the primary header
  const primaryIndex = headers.indexOf(primary);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((item, idx) => (
                <td
                  key={idx}
                  className={idx === primaryIndex ? "highlight" : ""}>
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid var(--border-color-primary);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 8px 12px;
          text-align: left;
        }

        thead {
          background-color: var(--background-level2);
          border-bottom: 1px solid var(--border-color-primary);
          font-size: 12px;
          font-weight: 600;
        }

        tbody {
          background-color: var(--background-level1);
        }

        td {
          font-size: 14px;
        }

        /* Remove inner borders */
        th,
        td {
          border: none;
        }

        /* Highlight primary column */
        .highlight {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
