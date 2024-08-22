// /components/OrderItem.tsx
"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface OrderItemProps {
  name: string;
  price: number;
  imgSrc: string;
  quantity?: number; 
}

const OrderItem: React.FC<OrderItemProps> = ({ name, price, imgSrc }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className="order-item flex justify-between items-center pt-2">
      <Image
        src={imgSrc}
        alt={name}
        width={55}
        height={55}
        className="w-12 h-12"
      />
      <div className="ml-2 flex-1">
        <p className="text-sm font-medium">
          {name}
          <br />
          <small>Price</small>
        </p>
        <p className="text-red-500 text-sm font-semibold">
          ${price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrement}
          className="bg-gray-200 rounded-full text-sm font-medium"
        >
          <Minus />
        </button>
        <span className="text-sm font-medium">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="bg-black rounded-full text-sm font-medium text-white"
        >
          <Plus />
        </button>
      </div>
    </li>
  );
};

export default OrderItem;
