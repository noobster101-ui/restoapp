import React from "react";
import Modal from "../ui/Modal";
import OrderItem from "../layout/Order";

interface PayNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PayNowModal: React.FC<PayNowModalProps> = ({ isOpen, onClose }) => {
  const orders = [
    { name: "Steak sapi bakar", price: 25.12, imgSrc: "/steak.jpg" },
    { name: "Ayam", price: 15.14, imgSrc: "/ayam.jpg" },
  ];

  const additionals = [
    { name: "Rice", price: 8.3, imgSrc: "/kuah.jpg" },
    { name: "Nasi Ayam", price: 10.12, imgSrc: "/nasi-ayam.jpg" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Order"
      size="sm"
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-bold">Total: $26.52</span>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-full"
            onClick={onClose}
          >
            Add to order
          </button>
        </div>
      }
    >
      <div className="order-details pr-2 px-1">
        <div className="mb-3 activeOrder">
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
        
        <hr />

        <div className="additional-orders my-2">
          <h3 className="font-semibold text-lg mb-2">Additional</h3>
          <ul className="order-list space-y-2">
            {additionals.map((item, index) => (
              <OrderItem
                key={index}
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
              />
            ))}
          </ul>
        </div>
        <hr />
        <div className="my-2">
          <label htmlFor="note" className="mb-1 font-bold">
            Add note
          </label>
          <textarea
            id="note"
            rows={3}
            className="w-full p-2 border rounded-md form-control"
            placeholder="Type your note here..."
          />
        </div>
      </div>
    </Modal>
  );
};

export default PayNowModal;
