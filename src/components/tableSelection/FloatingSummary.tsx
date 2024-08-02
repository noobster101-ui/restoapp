import { Clipboard } from "lucide-react";
import React from "react";

interface Table {
  id: number;
  name: string;
}

interface FloatingOrderSummaryProps {
  selectedTables: Table[];
  orderNumber: string | number;
  onPlaceOrder: () => void;
  onRemoveTable: (id: number) => void; // Callback to remove a table
}

const FloatingOrderSummary: React.FC<FloatingOrderSummaryProps> = ({
  selectedTables,
  orderNumber,
  onPlaceOrder,
  onRemoveTable,
}) => {
  return (
    <div className="floating-order-summary fixed bottom-0 left-0 w-full p-4 bg-white border-t shadow-md flex justify-between items-center">
      <div className="order-info flex items-center">
        <div className="icon2 bg-orange-100 rounded-full">
          <Clipboard />
        </div>
        <div className="flex">
          <div className="p-2 pr-4">
            <p className="font-semibold">Table</p>
            <p className="text-sm text-gray-500">Order #{orderNumber}</p>
          </div>
          <div className="selected-tables flex flex-wrap border-l border-gray-300 p-4">
            {selectedTables.map((table) => (
              <div
                key={table.id}
                className="table-card2 bg-gray-100 p-2 rounded-lg flex items-center mr-2"
              >
                <b className="text-sm">{table.name}</b>
                <span onClick={() => onRemoveTable(table.id)}>
                  x
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary bg-orange-500 text-white px-4 py-2 rounded-full"
        onClick={onPlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default FloatingOrderSummary;
