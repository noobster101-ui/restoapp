import React from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select, { SelectItem } from "../ui/LabelSelect";
import LabelInput from "../ui/LabelInput";
import useScreenSize from "../ui/ScreenSize";

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ isOpen, onClose }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const modalSize = useScreenSize<"sm" | "md" | "lg" | "xl" | "xxl">({
    base: "lg",
    sm: "xxl",
    md: "xl",
    lg: "lg",
    xl: "lg",
    xxl: "lg",
  });
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add customers"
      size={modalSize}
      
      footer={
        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full px-20 mr-2" onClick={onClose}>Cancel</Button>
          <Button className="rounded-full px-20">Save</Button>
        </div>
      }
    >
      <form className="p-4 mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <LabelInput name="name" label="Name" placeholder="Enter name" />
          <LabelInput name="deliveryArea" label="Delivery area" placeholder="Enter delivery area" />
          <LabelInput name="phoneNumber" label="Phone number" placeholder="Enter phone number" />
          <Select name="location" label="Select Location/Branch">
            <SelectItem value="">Select location/Branch</SelectItem>
            {/* Add more options as needed */}
          </Select>
          <LabelInput name="email" label="Email" placeholder="Enter email address" />
          <LabelInput name="building" label="Building" placeholder="Enter building" />
          <Select name="sex" label="Sex">
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>
          <LabelInput name="street" label="Street" placeholder="Enter street" />
          <div className="grid grid-cols-3 gap-4">
            <Select name="day" label="Day">
              {days.map(day => (
                <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
              ))}
            </Select>
            <Select name="month" label="Month">
              {months.map((month, index) => (
                <SelectItem key={index} value={month}>{month}</SelectItem>
              ))}
            </Select>
            <Select name="year" label="Year">
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </Select>
          </div>
          <LabelInput name="city" label="City" placeholder="Enter city" />
          <Select name="customerGroup" label="Customer group">
            <SelectItem value="">Select customer group</SelectItem>
          </Select>
          <Select name="country" label="Country">
            <SelectItem value="">Select country</SelectItem>
          </Select>
        </div>
      </form>
    </Modal>
  );
};

export default AddCustomerModal;
