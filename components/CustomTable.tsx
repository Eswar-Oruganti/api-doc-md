export const CustomTable = ({ children }) => {
  const data = JSON.parse(children.props.children);
  const { headers, rows } = data;
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            {headers.map((header, index) => {
              return (
                <th className="table-cell" key={header + index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((item, index) => {
                  return (
                    <td className="table-cell" key={item + index}>
                      {item}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          text-align: left;
        }

        .table-head {
          background-color: #f4f4f4;
        }

        .table-cell {
          padding: 12px 16px;
          border: 1px solid #ccc;
        }

        .table th {
          font-weight: bold;
        }

        .table tbody tr:nth-child(odd) {
          background-color: #f9f9f9;
        }

        .table tbody tr:nth-child(even) {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};
