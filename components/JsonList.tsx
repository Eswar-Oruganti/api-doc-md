type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
export const JsonList = ({ children }) => {
  const data = JSON.parse(children.props.children);
  return (
    <div className="list-container">
      {(Object.entries(data) as Entries<typeof data>).map((item) => {
        return (
          <div className="request-header-list" key={item[0]}>
            <span className="header">{item[0]}</span>
            <span>-</span>
            <span className="value">{item[1]}</span>
          </div>
        );
      })}

      <style jsx>{`
        .request-header-list {
          display: grid;
          grid-template-columns: 125px 10px 1fr; /* Align header and value */
          column-gap: 6px;
          align-items: baseline;
        }

        .header {
          font-weight: 700;
          font-size: 18px;
        }
        .value {
          font-size: 16px;
          word-wrap: break-word;
          word-break: break-word;
          white-space: normal;
        }

        .list-container {
          display: flex;
          flex-direction: column;
          row-gap: 8px;
        }
      `}</style>
    </div>
  );
};
