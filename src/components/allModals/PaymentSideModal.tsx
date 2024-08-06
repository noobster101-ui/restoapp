"use client"; // Ensure client-side rendering

import React, { useState } from "react";
import SideModal from "../ui/SideModal";
import {
  Plus,
  DollarSign,
  Mail,
  CheckIcon,
  CircleXIcon,
  PrinterCheckIcon,
} from "lucide-react";
import Image from "next/image";

interface PaymentSideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTipModal: () => void;
  onOpenConfirmModal: () => void;
}

const PaymentSideModal: React.FC<PaymentSideModalProps> = ({
  isOpen,
  onClose,
  onOpenTipModal,
  onOpenConfirmModal,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [inputAmount, setInputAmount] = useState<string>("");

  const handlePaymentMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  const handleKeypadClick = (value: string | number) => {
    if (value === "C") {
      setInputAmount("");
    } else if (value === "Delete") {
      setInputAmount((prev) => prev.slice(0, -1));
    } else if (value === "Add") {
      alert(`Amount added: ${inputAmount}`);
      setInputAmount("");
    } else {
      setInputAmount((prev) => prev + value.toString());
    }
  };

  const handleDoneClick = () => {
    onClose(); 
    onOpenConfirmModal(); 
  };

  return (
    <SideModal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <>
          <span>Order Payment</span>
          <br />
          <small className="text-gray-400">Order #102</small>
        </>
      }
      size="lg"
      footer={null}
    >
      <div className="payBox">
        <div className="bg-gray-100 rounded-xl py-2 mb-4 px-3">
          <div className="flex justify-between items-center">
            <span className="text-dark">Tip Amount</span>
            <span className="text-sm">$ 8.12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-dark">Total Amount</span>
            <span className="text-md font-semibold text-orange-500">
              $ 64.00
            </span>
          </div>
        </div>
        <div className="flex-grow">
          <div className="mb-4 cardBox">
            <h6 className="text-dark mb-2">Payment method</h6>
            <div className="flex space-x-2">
              <button
                className={`border-2 ${
                  selectedMethod === "Cash"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentMethodChange("Cash")}
              >
                <Image src="/money.png" alt="Cash" width={32} height={32} />
              </button>
              <button
                className={`border-2 ${
                  selectedMethod === "MasterCard"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentMethodChange("MasterCard")}
              >
                <Image
                  src="/mastercard.png"
                  alt="MasterCard"
                  width={32}
                  height={32}
                />
              </button>
              <button
                className={`border-2 ${
                  selectedMethod === "Visa"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentMethodChange("Visa")}
              >
                <Image src="/visa.png" alt="Visa" width={32} height={32} />
              </button>
              <button
                className={`border-2 ${
                  selectedMethod === "GiftCard"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentMethodChange("GiftCard")}
              >
                <Image
                  src="/giftcard.png"
                  alt="GiftCard"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="text-dark mb-2">Input amount</h6>
            <input
              type="text"
              placeholder="Input amount"
              value={inputAmount}
              className="w-full p-2 border rounded-full bg-gray-100 text-center"
              disabled
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              1,
              2,
              3,
              10,
              4,
              5,
              6,
              20,
              7,
              8,
              9,
              "Delete",
              "C",
              0,
              ".",
              "Add",
            ].map((item, index) => (
              <button
                key={index}
                className={`p-3 mb-1 text-lg rounded-full ${
                  item === 10 || item === 20
                    ? "bg-blue-100 hover:bg-blue-200 text-blue-700"
                    : typeof item === "number"
                    ? "bg-gray-100 hover:bg-gray-200 text-black"
                    : item === "C" || item === "Delete"
                    ? "bg-orange-100 hover:bg-orange-200 text-orange-500"
                    : "bg-gray-300 hover:bg-gray-400 text-black"
                }`}
                onClick={() => handleKeypadClick(item)}
              >
                <b>
                  {item === "Delete" ? (
                    <CircleXIcon className="w-5 h-5 mx-auto" />
                  ) : (
                    item
                  )}
                </b>
              </button>
            ))}
          </div>
        </div>
        <div className="py-3 bg-white border-t border-gray-200">
          <div className="w-100 space-x-2 payBtnset">
            <button className="bg-gray-200 rounded-xl" onClick={onOpenTipModal}>
              <DollarSign className="w-5 mr-2" />
              Tip amount
            </button>
            <button className="bg-gray-200 rounded-xl">
              <PrinterCheckIcon className="w-5 mr-2" />
              Gift receipt
            </button>
            <button className="bg-gray-200 rounded-xl">
              <Mail className="w-5 mr-2" />
              Email
            </button>
            <button className="bg-orange-500 rounded-xl rgb" onClick={handleDoneClick}>
              <CheckIcon className="w-5 mr-2" />
              Done
            </button>
          </div>
        </div>
      </div>
    </SideModal>
  );
};

export default PaymentSideModal;
