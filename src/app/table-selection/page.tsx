// /pages/table-selection.tsx
"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import TableControls from "../../components/tableSelection/TableControl";
import RowSelect from "../../components/tableSelection/RowSelect";
import TableCard from "../../components/tableSelection/TableCard";
import FloatingOrderSummary from "../../components/tableSelection/FloatingSummary";

interface Table {
  id: number;
  name: string;
  status: "Available" | "Reserved" | "Billed" | "Available soon";
  size: "small" | "medium" | "large" | "xlarge";
  seats: number;
}

const TableSelection: React.FC = () => {
  const [selectedTables, setSelectedTables] = useState<Table[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const tables: Table[] = [
    { id: 1, name: "T-01", status: "Available", size: "small", seats: 4 },
    { id: 2, name: "T-02", status: "Reserved", size: "small", seats: 2 },
    { id: 3, name: "T-03", status: "Billed", size: "medium", seats: 10 },
    { id: 4, name: "T-04", status: "Available", size: "small", seats: 2 },
    { id: 5, name: "T-05", status: "Available", size: "small", seats: 4 },
    { id: 6, name: "T-06", status: "Available", size: "xlarge", seats: 12 },
    { id: 7, name: "T-07", status: "Available soon", size: "large", seats: 10 },
    {
      id: 8,
      name: "T-08",
      status: "Available soon",
      size: "xlarge",
      seats: 12,
    },
    { id: 9, name: "T-09", status: "Available", size: "small", seats: 4 },
    { id: 10, name: "T-10", status: "Reserved", size: "small", seats: 2 },
    { id: 11, name: "T-11", status: "Billed", size: "large", seats: 10 },
    { id: 12, name: "T-12", status: "Available soon", size: "small", seats: 2 },

    {
      id: 13,
      name: "T-13",
      status: "Available soon",
      size: "large",
      seats: 10,
    },
    {
      id: 14,
      name: "T-14",
      status: "Available soon",
      size: "xlarge",
      seats: 12,
    },

    { id: 15, name: "T-15", status: "Available", size: "small", seats: 4 },
    { id: 16, name: "T-16", status: "Reserved", size: "small", seats: 2 },
  ];

  const rows = [
    "B-1",
    "B-2",
    "B-3",
    "B-4",
    "B-5",
    "B-6",
    "B-7",
    "B-8",
    "B-9",
    "B-10",
  ];

  const handleSelectRow = (row: string) => {
    setSelectedRows((prev) => {
      if (prev.includes(row)) {
        return prev.filter((r) => r !== row);
      } else {
        return [...prev, row];
      }
    });
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSelectTable = (id: number) => {
    setSelectedTables((prev) =>
      prev.find((table) => table.id === id)
        ? prev.filter((table) => table.id !== id)
        : [...prev, tables.find((table) => table.id === id)!]
    );
  };

  const handleRemoveTable = (id: number) => {
    setSelectedTables((prev) => prev.filter((table) => table.id !== id));
  };

  return (
    <>
      <Header />

      <div className="breadcrumb flex items-center space-x-2 p-4 text-sm bg-white border-b">
        <span className="text-gray-500">Dashboard</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-500">Food</span>
        <span className="text-gray-500">/</span>
        <span className="text-orange-500">Select Table</span>
      </div>

      <TableControls onFilterChange={handleFilterChange} />

      <div className="flex flex-grow w-100">
        <div className="flex-grow p-5">
          <div className="flex flex-wrap">
            {tables.map((table) => (
              <TableCard
                key={table.id}
                id={table.id}
                name={table.name}
                status={table.status}
                size={table.size}
                seats={table.seats}
                selected={selectedTables.some(
                  (selectedTable) => selectedTable.id === table.id
                )}
                onSelect={handleSelectTable}
              />
            ))}
          </div>
        </div>

        <div className="p-1">
          <RowSelect
            rows={rows}
            selectedRows={selectedRows}
            onSelectRow={handleSelectRow}
          />
        </div>
      </div>

      {selectedTables.length > 0 && (
        <FloatingOrderSummary
          selectedTables={selectedTables}
          orderNumber={102}
          onPlaceOrder={() => console.log("Order placed")}
          onRemoveTable={handleRemoveTable}
        />
      )}
    </>
  );
};

export default TableSelection;
