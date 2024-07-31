// /pages/dashboard.jsx
"use client";

import * as React from "react";
import { useState } from "react";
import { RightSidebar } from "@/components/layout/RightSidebar";
import SearchBar from "@/components/layout/SearchBar";
import FilterTabs from "@/components/layout/Filter";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const allMenuItems = [
  {
    name: "Steak sapi bakar",
    price: 25.12,
    img: "/steak.jpg",
    category: "All",
  },
  { name: "Ayam kentang", price: 15.4, img: "/ayam.jpg", category: "Chicken" },
  { name: "Ikan santan", price: 10.4, img: "/ikan.jpg", category: "Seafood" },
  { name: "Mie kuah pedas", price: 11.21, img: "/mie.jpg", category: "Pasta" },
  { name: "Kuah santan", price: 5.5, img: "/kuah.jpg", category: "Seafood" },
  {
    name: "Mie gepeng telor",
    price: 12.63,
    img: "/mie-gepeng.jpg",
    category: "Pasta",
  },
  {
    name: "Nasi steak ayam",
    price: 12.56,
    img: "/nasi-steak.jpg",
    category: "Rice bowl",
  },
  {
    name: "Steak ikan santan",
    price: 11.51,
    img: "/steak-ikan.jpg",
    category: "Seafood",
  },
  {
    name: "Nasi goreng putih",
    price: 8.5,
    img: "/nasi-goreng.jpg",
    category: "Rice bowl",
  },
  {
    name: "Nasi ayam salad",
    price: 9.53,
    img: "/nasi-ayam.jpg",
    category: "Chicken",
  },
  {
    name: "Mie putih ayam pedas",
    price: 10.11,
    img: "/mie-putih.jpg",
    category: "Pasta",
  },
  { name: "Cumi-cumi", price: 8.3, img: "/cumi.jpg", category: "Seafood" },
];

export default function Dashboard() {
  const [filteredItems, setFilteredItems] = useState(allMenuItems);

  const handleFilterChange = (filter: string) => {
    if (filter === "All") {
      setFilteredItems(allMenuItems);
    } else {
      setFilteredItems(allMenuItems.filter((item) => item.category === filter));
    }
  };

  return (
    <>
      <Header />
      <div className="dashboard">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <div className="main-content">
            <div className="p-1">
              <div className="breadcrumb text-orange-500 text-sm bg-white">
                Dashboard / Food
              </div>
              <div className="searchFilter flex items-center justify-between mb-4 bg-white px-4 py-2">
                <SearchBar />
                <FilterTabs onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 p-4 mb-3">
              {filteredItems.map((item) => (
                <div
                  key={item.name}
                  className="menu-item"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-red-500 font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
    </>
  );
}
