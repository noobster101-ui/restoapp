import React from "react";

interface RowSelectProps {
  rows: string[];
  selectedRows: string[];
  onSelectRow: (row: string) => void;
}

const RowSelect: React.FC<RowSelectProps> = ({ rows, selectedRows, onSelectRow }) => {
 
  const chunkRows = (rows: string[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < rows.length; i += chunkSize) {
      result.push(rows.slice(i, i + chunkSize));
    }
    return result;
  };

  const rowSets = chunkRows(rows, 5);

  return (
    <div className="row-selection flex flex-col space-y-4">
      {rowSets.map((set, index) => (
        <div key={index} className="row-set p-3 bg-white rounded shadow-md">
          {set.map((row) => (
            <button
              key={row}
              className={`row-item w-16 h-16 rounded-full flex items-center justify-center text-bold mx-2 my-2 ${
                selectedRows.includes(row) ? "bg-theme-500 text-white" : "bg-theme-100 text-theme-500"
              }`}
              onClick={() => onSelectRow(row)}
            >
              {row}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RowSelect;
