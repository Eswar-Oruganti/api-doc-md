export const CustomTable = ({ children }) => {
  const data = JSON.parse(children.props.children);
  const { headers, rows } = data;

  return (
    <div className="table-container">
      <table className="table">
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
                <td key={idx}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          overflow: hidden;
          border-radius: 12px; /* Rounded corners */
          border: 1px solid #ccc; /* Outer border only */
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 16px; /* Increased padding */
          text-align: left;
        }

        thead {
          background-color: #f4f4f4;
        }

        /* Remove inner borders */
        th,
        td {
          border: none;
        }
      `}</style>
    </div>
  );
};
