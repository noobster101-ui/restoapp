import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderItem from "./Order";
import { useState } from "react";
import NoteModal from "../allModals/NoteModal";
import PayNowModal from "../allModals/PayNowModal";
import PaymentSideModal from "../allModals/PaymentSideModal";
import TipModal from "../allModals/TipModal";
import ConfirmModal from "../allModals/ConfirmModal";

export function RightSidebar() {
  const [isNoteModalOpen, setNoteModalOpen] = useState(false);
  const [isPayNowModalOpen, setPayNowModalOpen] = useState(false);
  const [isPaymentSideModalOpen, setPaymentSideModalOpen] = useState(false);
  const [isTipModalOpen, setTipModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const orders = [
    { name: "Steak sapi bakar", price: 25.12, imgSrc: "/steak.jpg" },
    { name: "Ayam", price: 15.14, imgSrc: "/ayam.jpg" },
    { name: "Mie Goreng", price: 11.21, imgSrc: "/mie.jpg" },
  ];

  const handleOpenPaymentSideModal = () => {
    setPayNowModalOpen(false);
    setPaymentSideModalOpen(true);
  };

  const handleOpenTipModal = () => {
    setTipModalOpen(true);
  };

  const handleOpenConfirmModal = () => {
    setConfirmModalOpen(true);
  };

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
        <TabPanel className="tab-panel">
          <h2 className="font-bold mt-1">Customer Information</h2>
          <form className="mt-2">
            <div className="mb-2">
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded-full"
                placeholder="Customer Name"
              />
            </div>
            <div className="mb-2">
              <select className="w-full py-2 px-3 border border-gray-300 rounded-full">
                <option>Select Table</option>
                <option>Table 1</option>
                <option>Table 2</option>
              </select>
            </div>
            <span
              className="w-full p-2 mb-2 bg-theme-100 text-theme-500 rounded-full font-bold noteBtn"
              onClick={() => setNoteModalOpen(true)}
            >
              Add Note
            </span>
          </form>
          <h2 className="font-bold mt-1">Order Details</h2>
          <div className="order-details">
            <ul className="order-list space-y-2">
              {orders.map((order, index) => (
                <OrderItem
                  key={index}
                  name={order.name}
                  price={order.price}
                  imgSrc={order.imgSrc}
                />
              ))}
            </ul>
          </div>
          <div className="summary mt-2 px-1">
            <div className="flex justify-between pt-2">
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
            <button
              className="pay-now p-2 bg-theme-500 text-white rounded-full text-sm font-medium"
              onClick={() => setPayNowModalOpen(true)}
            >
              Pay Now
            </button>
          </div>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h2 className="font-bold mt-1">Reservation Details</h2>
          <form className="mt-2">
            <div className="mb-2">
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded-full"
                placeholder="Reservation Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="datetime-local"
                className="w-full py-2 px-3 border border-gray-300 rounded-full"
                placeholder="Select Time"
              />
            </div>
            <span
              className="w-full p-2 mb-2 bg-theme-100 text-theme-500 rounded-full font-bold noteBtn"
              onClick={() => setNoteModalOpen(true)}
            >
              Reserve
            </span>
          </form>
          <h2 className="font-bold mt-1">Order Details</h2>
          <div className="order-details">
            <ul className="order-list space-y-2">
              {orders.map((order, index) => (
                <OrderItem
                  key={index}
                  name={order.name}
                  price={order.price}
                  imgSrc={order.imgSrc}
                />
              ))}
            </ul>
          </div>
          <div className="summary mt-2 px-1">
            <div className="flex justify-between pt-2">
              <span className="text-sm font-medium">Sub Total</span>
              <span className="text-sm font-medium">$62.13</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Tax (10%)</span>
              <span className="text-sm font-medium">$2.87</span>
            </div>
            <div className="total flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$65.00</span>
            </div>
            <button
              className="pay-now p-2 bg-theme-500 text-white rounded-full text-sm font-medium"
              onClick={() => setPayNowModalOpen(true)}
            >
              Pay Now
            </button>
          </div>
        </TabPanel>
      </Tabs>

      {/* Note Modal */}
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setNoteModalOpen(false)}
      />

      {/* Pay Now Modal */}
      <PayNowModal
        isOpen={isPayNowModalOpen}
        onClose={() => setPayNowModalOpen(false)}
        onAddToOrder={handleOpenPaymentSideModal}
      />

      {/* Payment Side Modal */}
      <PaymentSideModal
        isOpen={isPaymentSideModalOpen}
        onClose={() => setPaymentSideModalOpen(false)}
        onOpenTipModal={handleOpenTipModal}
        onOpenConfirmModal={handleOpenConfirmModal}
      />

      {/* Tip Modal */}
      <TipModal
        isOpen={isTipModalOpen}
        onClose={() => setTipModalOpen(false)}
      />

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
      />
    </div>
  );
}
