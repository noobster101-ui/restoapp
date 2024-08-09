import React, { useState } from "react";
import Modal from "../ui/Modal";
import SearchBar from "../layout/SearchBar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import AddCustomerModal from "./AddCustomerModal";
import useScreenSize from "../ui/ScreenSize";

interface Customer {
  name: string;
  phone: string;
  email: string;
  refCode: string;
  city: string;
}

interface ManageCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const customers: Customer[] = [
  {
    name: "John Sparrow",
    phone: "083894771983",
    email: "john.sparrow@mail.com",
    refCode: "-",
    city: "Sleman, Yogyakarta",
  },
  {
    name: "Bella Anisa",
    phone: "081829748835",
    email: "bella.anisa27@mail.com",
    refCode: "-",
    city: "Sleman, Yogyakarta",
  },
  {
    name: "Minimo Masasi",
    phone: "08738729837",
    email: "minimo45@mail.com",
    refCode: "-",
    city: "Sleman, Yogyakarta",
  },
];

const ManageCustomerModal: React.FC<ManageCustomerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);

  const handleAddCustomerOpen = () => {
    setIsAddCustomerOpen(true);
  };

  const handleAddCustomerClose = () => {
    setIsAddCustomerOpen(false);
  };
  const modalSize = useScreenSize<"sm" | "md" | "lg" | "xl" | "xxl">({
    base: "lg",
    sm: "xxl",
    md: "xxl",
    lg: "lg",
    xl: "lg",
    xxl: "lg",
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Manage customer"
        size={modalSize}
      >
        <div className="mb-2 border-b">
          <SearchBar placeholder="Search customer" name="customerSearch" />
        </div>

        <div className="px-4 py-2">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse relative">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-nowrap text-gray-600">
                    Customer Name
                  </th>
                  <th className="p-3 text-left text-nowrap text-gray-600">
                    Phone Number
                  </th>
                  <th className="p-3 text-left text-nowrap text-gray-600">
                    Email Address
                  </th>
                  <th className="p-3 text-left text-nowrap text-gray-600">
                    Ref Code
                  </th>
                  <th className="p-3 text-left text-nowrap text-gray-600">
                    City Location
                  </th>
                  <th className="p-3 text-left text-nowrap"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 group relative cursor-pointer"
                  >
                    <td className="p-3">{customer.name}</td>
                    <td className="p-3">{customer.phone}</td>
                    <td className="p-3">{customer.email}</td>
                    <td className="p-3">{customer.refCode}</td>
                    <td className="p-3 text-nowrap">{customer.city}</td>
                    <td className="p-3"></td>
                    <td className="absolute right-0 bg-white pt-2 px-3 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="px-2 py-1 border border-orange-500 text-orange-500 rounded-full">
                        Display order
                      </button>
                      <button className="px-2 py-1 bg-orange-100 text-orange-500 rounded-full">
                        Edit info
                      </button>
                      <button className="px-2 py-1 bg-orange-500 text-white rounded-full">
                        Add to order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between pt-3">
            <div className="flex justify-between items-center pagging">
              <button className="flex items-cente p-2 text-gray-600 m-0">
                <ChevronLeftIcon />
                <span>Previous</span>
              </button>
              <b className="w-10 text-center m-0">1</b>
              <button className="flex items-cente p-2 text-gray-600 m-0">
                <span>Next</span>
                <ChevronRightIcon />
              </button>
            </div>
            <div className="p-2">
              <button
                className="px-6 py-2 mr-3 border border-orange-500 text-orange-500 rounded-full"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-full"
                onClick={handleAddCustomerOpen}
              >
                New customer
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <AddCustomerModal
        isOpen={isAddCustomerOpen}
        onClose={handleAddCustomerClose}
      />
    </>
  );
};

export default ManageCustomerModal;
