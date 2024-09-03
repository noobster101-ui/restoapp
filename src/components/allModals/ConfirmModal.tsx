import React from "react";
import Modal from "../ui/Modal";
import Image from "next/image";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  const orderItems = [
    {
      name: "Steak sapi bakar",
      qty: 1,
      price: 25.12,
      tax: 0.33,
      subtotal: 25.12,
    },
    { name: "Ayam kentang", qty: 1, price: 15.4, tax: 0.32, subtotal: 15.4 },
    {
      name: "Mie kuah pedas",
      qty: 1,
      price: 11.21,
      tax: 0.42,
      subtotal: 11.21,
    },
  ];

  const subtotal = orderItems
    .reduce((acc, item) => acc + item.subtotal, 0)
    .toFixed(2);
  const surcharge = 0.0;
  const discount = 0.0;
  const tax = orderItems.reduce((acc, item) => acc + item.tax, 0).toFixed(2);
  const billAmount = (
    parseFloat(subtotal) +
    surcharge -
    discount +
    parseFloat(tax)
  ).toFixed(2);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      footer={null}
      title={
        <>
          <span>Order confirmation</span>
          <br />
          <small className="text-gray-500 m-0 p-0" style={{ fontSize: "13px" }}>
            Please Confirm the order below to complete the payment
          </small>
        </>
      }
    >
      {/* <div className="px-4">
        <small>Please Confirm the order below to complete the payment</small>
      </div>
     */}

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full mb-4 table">
            <thead>
              <tr className="text-gray-500 text-xs">
                <th className="py-2 text-left">ITEM NAME</th>
                <th className="py-2 text-center">QTY</th>
                <th className="py-2 text-center">PRICE</th>
                <th className="py-2 text-right">TAX</th>
                <th className="py-2 text-right">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index} className="text-sm border-b">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 text-center">{item.qty}</td>
                  <td className="py-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="py-2 text-right">${item.tax.toFixed(2)}</td>
                  <td className="py-2 text-right">
                    ${item.subtotal.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mb-4">
          <div className="bg-gray-100 p-4 rounded-lg w-1/2 mr-2">
            <h3 className="text-sm font-bold mb-2">NOTES :</h3>
            <p className="text-sm text-gray-500">
              Please Confirm the order below to complete the payment
            </p>
          </div>

          <div className="w-1/2 ml-2">
            <div className="mb-2 text-sm">
              <div className="flex justify-between mb-1">
                <p>SUBTOTAL</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between mb-1">
                <p>SURCHARGE</p>
                <p>${surcharge.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-1">
                <p>ORDER DISCOUNT</p>
                <p>${discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-1">
                <p>TAX</p>
                <p>${tax}</p>
              </div>
            </div>
            <div className="flex justify-between items-center font-bold text-theme-500">
              <p>BILL AMOUNT</p>
              <p>${billAmount}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="p-2">
            <h5 className="text-sm">Payment method</h5>
            <div className="flex items-center">
              <Image src="/money.png" alt="Cash" width={32} height={32} />
              <span className="ml-2 font-bold">Cash</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-6 py-2 bg-transparent border border-theme-500 text-theme-500 rounded-full"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-theme-500 text-white rounded-full"
              onClick={onClose}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
