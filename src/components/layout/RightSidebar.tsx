// /components/layout/RightSidebar.tsx
"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderItem from "./Order";

export function RightSidebar() {
  return (
    <div className="right-sidebar relative">
      <Tabs>
        <TabList className="tabs flex space-x-2 border-b bg-gray-100 p-2">
          <Tab className="tab cursor-pointer px-4 py-2 text-sm font-medium text-gray-600">
            Buy
          </Tab>
          <Tab className="tab cursor-pointer px-4 py-2 text-sm font-medium text-gray-600">
            Reservation
          </Tab>
        </TabList>
        <TabPanel className="tab-panel mt-4">
          <h2 className="font-bold">Customer Information</h2>
          <form className="mt-4">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-full"
                placeholder="Customer Name"
              />
            </div>
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-300 rounded-full">
                <option>Select Table</option>
                <option>Table 1</option>
                <option>Table 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-orange-100 text-orange-500 rounded-full font-bold"
            >
              Add Note
            </button>
          </form>
        </TabPanel>
        <TabPanel className="tab-panel mt-4">
          <h2 className="font-bold">Reservation Details</h2>
          <form className="mt-4">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-full"
                placeholder="Reservation Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="datetime-local"
                className="w-full p-2 border border-gray-300 rounded-full"
                placeholder="Select Time"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-orange-100 text-orange-500 rounded-full font-bold"
            >
              Reserve
            </button>
          </form>
        </TabPanel>
      </Tabs>

      <h2 className="font-bold mt-3 mb-0">Order Details</h2>
      <div className="order-details overflow-y-auto max-h-60">
        <ul className="order-list space-y-2">
          <OrderItem
            name="Steak sapi bakar"
            price={25.12}
            imgSrc="/steak.jpg"
          />
          <OrderItem name="Ayam kentang" price={15.4} imgSrc="/ayam.jpg" />
          <OrderItem name="Mie kuah pedas" price={11.21} imgSrc="/mie.jpg" />
        </ul>
        <div className="summary mt-4 fixed">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Sub Total</span>
            <span className="text-sm font-medium">$62.13</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Tax (10%)</span>
            <span className="text-sm font-medium">$1.87</span>
          </div>
          <div className="total flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$64.00</span>
          </div>
          <button className="pay-now p-2 bg-orange-500 text-white rounded-full text-sm font-medium">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
