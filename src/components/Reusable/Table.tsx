type TableRow = { [key: string]: string | number };

interface TableProps {
  headers: string[];
  data: TableRow[];
  onActionClick?: (row: TableRow) => void;
}

export const Table: React.FC<TableProps> = ({ headers, data, onActionClick }) => {
  return (
    <div className="text-white rounded-lg shadow-md font-Outfit">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-30 text-sm">
              {headers.map((header, idx) => (
                <th key={idx} className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-700 hover:bg-[#1F1F3D] transition"
              >
                {headers.map((header, hIdx) => {
                  const key = Object.keys(row)[hIdx];
                  const content = row[key];

                  if (key === 'status') {
                    return (
                      <td key={hIdx} className="px-4 py-3">
                        <div
                          className={`px-3 py-2 text-sm rounded-full font-medium text-center ${
                            content === 'Active'
                              ? 'bg-green-600 text-white'
                              : 'bg-red-600 text-white'
                          }`}
                        >
                          {content}
                        </div>
                      </td>
                    );
                  }

                  if (key === 'action') {
                    return (
                      <td key={hIdx} className="px-4 py-3">
                        <button
                          onClick={() => onActionClick?.(row)}
                          className="text-blue-400 hover:underline"
                        >
                          View
                        </button>
                      </td>
                    );
                  }

                  return (
                    <td key={hIdx} className="px-4 py-3 whitespace-nowrap">
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <p className="text-center text-gray-400 py-4">No data found.</p>
        )}
      </div>
    </div>
  );
};
