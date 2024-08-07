// /components/layout/Header.tsx
"use client";

import { Home, ReceiptText, Clock, CreditCard, ChevronLeft, HandPlatter, ShoppingBagIcon, CalendarDaysIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Dropdown from "../ui/Dropdown";

export function Header() {
  const [selectedDiningOption, setSelectedDiningOption] = useState("Dine in");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const diningOptions = [
    { label: "Dine In", value: "dinein", icon: <HandPlatter className="w-4 h-4" /> },
    { label: "Take Away", value: "takeaway", icon: <ShoppingBagIcon className="w-4 h-4" /> },
    { label: "Reservation", value: "reservation", icon: <CalendarDaysIcon className="w-4 h-4" /> },
  ];
  return (
    <header className="header flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
         <ChevronLeft />
        </button>
        <div className="border-r border-gray-300 h-10"></div>
        <div className="flex items-center space-x-2">
          <Image src="/favlogo.png" alt="Logo" width={55} height={50} />
          <div>
            <h1 className="text-xl font-bold">Walk-In</h1>
            <p className="text-sm text-gray-500">Coca coffeetalk</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <nav className="flex items-center space-x-8">
          <Link
            href="/home"
            className="flex items-center space-x-2 text-orange-500 font-bold"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm font-bold">Home</span>
          </Link>
          <Link
            href="/order"
            className="flex items-center space-x-2 text-gray-500 font-bold"
          >
            <ReceiptText className="w-5 h-5" />
            <span className="text-sm font-bold">Order</span>
          </Link>
          <Link
            href="/history"
            className="flex items-center space-x-2 text-gray-500 font-bold"
          >
            <Clock className="w-5 h-5" />
            <span className="text-sm font-bold">History</span>
          </Link>
          <Link
            href="/bills"
            className="flex items-center space-x-2 text-gray-500 font-bold"
          >
            <CreditCard className="w-5 h-5" />
            <span className="text-sm font-bold">Bills</span>
          </Link>
        </nav>
      
        <Dropdown
          options={diningOptions}
          selectedValue={selectedDiningOption}
          onChange={(value) => setSelectedDiningOption(value)}
          label="Dining option"
          buttonClassName="text-orange-500 bg-orange-100 rounded-full px-5 py-1 text-md btn-head"
        />
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">{dateTime.toLocaleTimeString()} {dateTime.toLocaleDateString()}</span>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/user1.png" alt="User" width={40} height={40} />
          </div>
        </div>
      </div>
    </header>
  );
}
