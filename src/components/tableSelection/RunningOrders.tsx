import { Banknote, Printer } from "lucide-react";
import React from "react";

interface Order {
  tableNumber: string;
  orderNumber: string;
  amount: string;
  status: "Running order" | "Done soon" | "Done";
  diningFor: string;
}

const orders: Order[] = [
  {
    tableNumber: "T-06",
    orderNumber: "#46",
    amount: "$25.12",
    status: "Running order",
    diningFor: "35 min",
  },
  {
    tableNumber: "T-06",
    orderNumber: "#46",
    amount: "$25.12",
    status: "Done soon",
    diningFor: "5 min",
  },
  {
    tableNumber: "T-06",
    orderNumber: "#46",
    amount: "$25.12",
    status: "Done",
    diningFor: "5 min",
  },
];

const RunningOrder: React.FC = () => {
  return (
    <div className="overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 text-sm text-nowrap">
              Table No.
            </th>
            <th className="text-left p-2 text-sm text-nowrap">
              Order No.
            </th>
            <th className="text-left p-2 text-sm">Amount</th>
            <th className="text-center p-2 text-sm">Status</th>
            <th className="text-left p-2 text-sm text-nowrap">Dining For</th>
            <th className="text-right p-2 text-sm"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="p-1">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 font-medium text-xs ml-2">
                  {order.tableNumber}
                </div>
              </td>
              <td className="p-1 py-2">
                <p className="font-bold">{order.orderNumber}</p>
                <p className="text-sm text-gray-500">
                  Steak sapi bakar x 1.0...
                </p>
              </td>
              <td className="p-2 font-bold">{order.amount}</td>
              <td className="p-1 py-2 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs text-nowrap ${
                    order.status === "Running order"
                      ? "bg-blue-100 text-blue-500"
                      : order.status === "Done soon"
                      ? "bg-orange-100 text-orange-500"
                      : "bg-green-100 text-green-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-2 py-1 text-sm">{order.diningFor}</td>
              <td className="px-1 pt-4 flex justify-end space-x-1">
                <button className="px-3 py-1 border rounded-full border-orange-500 text-orange-500 hover:bg-orange-50 flex items-center gap-1 text-sm text-nowrap">
                  <Printer className="h-4 w-4" />
                  Re-Print
                </button>

                <button className="px-3 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-1 text-sm  text-nowrap">
                  <Banknote className="h-4 w-4" />
                  Pay now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RunningOrder;
