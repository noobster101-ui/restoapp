import React, { useState } from "react";
import SideModal from "../ui/SideModal";
import { MapPin, Clock } from "lucide-react";
import ApplyCouponModal from "./ApplyCoupanModal";
import useScreenSize from "../ui/ScreenSize";

interface OrderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


const orders = [
  {
    id: "256873",
    name: "John Sparrow",
    status: "Unpaid",
    address: "Test 555, Alimps Campus, Binaker",
    time: "7 mins",
    image: "/user1.png",
  },
  {
    id: "256874",
    name: "Chintya Lin",
    status: "Paid",
    address: "Test 555, Alimps Campus, Binaker",
    time: "7 mins",
    image: "/user2.png",
  },
  {
    id: "256875",
    name: "Brandon Po",
    status: "Paid",
    address: "Test 555, Alimps Campus, Binaker",
    time: "20 mins",
    image: "/user3.png",
  },
  {
    id: "256876",
    name: "Amanda",
    status: "Unpaid",
    address: "Test 555, Alimps Campus, Binaker",
    time: "22 mins",
    image: "/user4.png",
  },
  {
    id: "256877",
    name: "Michael Luck",
    status: "Paid",
    address: "Test 555, Alimps Campus, Binaker",
    time: "30 mins",
    image: "/user1.png",
  },
];

const OrderSidebar: React.FC<OrderSidebarProps> = ({ isOpen, onClose }) => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  const handleDeliveryClick = () => {
    setIsCouponModalOpen(true);
  };

  const handleCloseCouponModal = () => {
    setIsCouponModalOpen(false);
  };
  const modalSize = useScreenSize<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>({
    base: 'lg',
    sm: 'lg',
    md: 'lg',
    lg: 'lg',
    xl: 'lg',
    xxl: 'lg',
  });

  return (
    <>
      <SideModal
        isOpen={isOpen}
        onClose={onClose}
        title={
          <div className="flex items-center justify-between">
            <span>Upcoming orders</span>
            <span className="px-2 bg-orange-100 text-orange-500 rounded-full text-sm ml-3 mt-1">
              {orders.length}
            </span>
          </div>
        }
        size={modalSize}
      >
        <div className="overflow-y-auto">
          <p className="text-gray-600 mb-4">
            Additional orders are almost ready. Would you like to take them with
            you?
          </p>
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col mb-4 border rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-gray-500 text-sm">
                      Order ID #{order.id}{" "}
                      <span
                        className={`oStatus ${
                          order.status === "Paid"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                    <p className="font-bold">{order.name}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-1 bg-transparent border border-orange-500 text-orange-500 rounded-full text-sm">
                    Reject
                  </button>
                  <button
                    className="px-4 py-1 bg-orange-500 text-white rounded-full text-sm"
                    onClick={handleDeliveryClick}
                  >
                    Delivery
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-3 py-1 mt-2 text-gray-500 border-t">
                <p className="flex items-center space-x-1 py-1 text-sm">
                  <MapPin className="w-3 h-3" /> <span>{order.address}</span>
                </p>
                <p className="flex items-center space-x-1 py-1 font-semibold text-sm">
                  <Clock className="w-3 h-3" /> <span>{order.time}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SideModal>

      <ApplyCouponModal isOpen={isCouponModalOpen} onClose={handleCloseCouponModal} />
    </>
  );
};

export default OrderSidebar;
