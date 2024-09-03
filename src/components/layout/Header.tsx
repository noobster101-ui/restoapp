"use client";

import {
  Home,
  ReceiptText,
  Clock,
  CreditCard,
  ChevronLeft,
  HandPlatter,
  ShoppingBagIcon,
  CalendarDaysIcon,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Dropdown from "../ui/Dropdown";
import ManageCustomerModal from "../allModals/ManageCustomersModal";
import OrderSidebar from "../allModals/OrderSideModal";

export function Header() {
  const [selectedDiningOption, setSelectedDiningOption] = useState("Dine in");
  const [dateTime, setDateTime] = useState(new Date());
  const [isManageCustomerModalOpen, setManageCustomerModalOpen] =
    useState(false);
  const [isOrderSidebarOpen, setOrderSidebarOpen] = useState(false);

  const openManageCustomerModal = () => setManageCustomerModalOpen(true);
  const closeManageCustomerModal = () => setManageCustomerModalOpen(false);

  const openOrderSidebar = () => setOrderSidebarOpen(true);
  const closeOrderSidebar = () => setOrderSidebarOpen(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const diningOptions = [
    {
      label: "Dine In",
      value: "dinein",
      icon: <HandPlatter className="w-4 h-4" />,
    },
    {
      label: "Take Away",
      value: "takeaway",
      icon: <ShoppingBagIcon className="w-4 h-4" />,
    },
    {
      label: "Reservation",
      value: "reservation",
      icon: <CalendarDaysIcon className="w-4 h-4" />,
    },
  ];
  return (
    <header className="header flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Link href="/dashboard">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <ChevronLeft />
          </button>
        </Link>
        <div className="border-r border-gray-300 h-10"></div>

        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image src="/favlogo.png" alt="Logo" width={55} height={50} />
          <div>
            <h1 className="font-bold">Walk-In</h1>
            <p className="text-sm text-gray-500">Coca coffeetalk</p>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <nav className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-theme-500 font-bold"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm font-bold">Home</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-500 font-bold"
            onClick={openOrderSidebar}
          >
            <ReceiptText className="w-5 h-5" />
            <span className="text-sm font-bold">Order</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-500 font-bold"
          >
            <Clock className="w-5 h-5" />
            <span className="text-sm font-bold">History</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-500 font-bold"
          >
            <CreditCard className="w-5 h-5" />
            <span className="text-sm font-bold">Bills</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-500 font-bold"
            onClick={openManageCustomerModal}
          >
            <UserRound className="w-5 h-5" />
            <span className="text-sm font-bold">Customers</span>
          </Link>
        </nav>

        <Dropdown
          options={diningOptions}
          selectedValue={selectedDiningOption}
          onChange={(value) => setSelectedDiningOption(value)}
          label="Dining option"
          buttonClassName="text-theme-500 bg-theme-100 rounded-full px-3 py-1 text-md btn-head"
        />

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-1 text-center">
            {dateTime.toLocaleTimeString()} {dateTime.toLocaleDateString()}
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/user1.png" alt="User" width={40} height={40} />
          </div>
        </div>
      </div>

      <ManageCustomerModal
        isOpen={isManageCustomerModalOpen}
        onClose={closeManageCustomerModal}
      />
      <OrderSidebar isOpen={isOrderSidebarOpen} onClose={closeOrderSidebar} />
    </header>
  );
}
