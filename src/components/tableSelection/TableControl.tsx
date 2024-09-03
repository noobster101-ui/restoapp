"use client";

import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import { ArrowLeft } from "lucide-react";
import CustomSideBar from "../ui/CustomSideBar";
import Reservation from "./Reservation";
import useScreenSize from "../ui/ScreenSize";
import RunningOrder from "./RunningOrders";

interface TableControlsProps {
  onFilterChange: (filter: string) => void;
}

const TableControls: React.FC<TableControlsProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All tables");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsSidebarOpen(filter !== "All tables");
    onFilterChange(filter);
  };

  const handleCloseSidebar = () => {
    setActiveFilter("All tables");
    setIsSidebarOpen(false);
  };

  const filters = ["All tables", "Reservation", "Running order"];

  const modalSize = useScreenSize<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>({
    base: 'lg',
    sm: 'lg',
    md: 'lg',
    lg: 'md',
    xl: 'md',
    xxl: 'md',
  });

  const modalSize1 = useScreenSize<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>({
    base: 'xl',
    sm: 'xxl',
    md: 'xxl',
    lg: 'xl',
    xl: 'xl',
    xxl: 'xl',
  });
  

  return (
    <>
      <div className="table-controls grid grid-cols-1 lg:grid-cols-2 gap-2 items-center bg-white shadow-md rounded-md z-20 sticky">
        {/* Left Section: Back Button and Status Indicators */}
        <div className="flex items-center pr-4">
          <div className="flex items-center justify-start mr-4 border-r border-gray-300">
            <button className="flex items-center justify-center w-10 h-10">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="status-indicators flex items-center space-x-4">
            <p className="flex items-center">
              <span className="indicator available w-4 h-4 rounded-full mr-2 bg-blue-500 border-4 border-blue-200"></span>
              Available
            </p>
            <p className="flex items-center">
              <span className="indicator reserved w-4 h-4 rounded-full mr-2 bg-theme-500 border-4 border-theme-200"></span>
              Reserved
            </p>
            <p className="flex items-center">
              <span className="indicator billed w-4 h-4 rounded-full mr-2 bg-green-500 border-4 border-green-200"></span>
              Billed
            </p>
            <p className="flex items-center">
              <span className="indicator available-soon w-4 h-4 rounded-full mr-2 bg-yellow-500 border-4 border-yellow-200"></span>
              Available soon
            </p>
          </div>
        </div>

        {/* Right Section: Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="filter-tabs flex space-x-2 border-r border-gray-300 pr-4">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`button-outline ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="search-bar-wrapper flex justify-end w-full">
            <SearchBar
              placeholder="Search customer"
              name="customerSearch"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Sidebar for "Reservation" */}
      {activeFilter === "Reservation" && (
        <CustomSideBar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
          title={activeFilter}
          size={modalSize}
        >
          <div className="p-4">
            <Reservation />
          </div>
        </CustomSideBar>
      )}

      {/* Sidebar for "Running order" */}
      {activeFilter === "Running order" && (
        <CustomSideBar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
          title={activeFilter}
          size={modalSize1}
        >
          <div className="p-4">
            <RunningOrder />
          </div>
        </CustomSideBar>
      )}
    </>
  );
};

export default TableControls;
