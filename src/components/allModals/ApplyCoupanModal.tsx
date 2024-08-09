import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import useScreenSize from "../ui/ScreenSize";

interface ApplyCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyCouponModal: React.FC<ApplyCouponModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>("option1");

  const handleChange = (id: string) => {
    setSelectedOption(id);
  };

  const modalSize = useScreenSize<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>({
    base: 'lg',
    sm: 'xxl',
    md: 'xxl',
    lg: 'lg',
    xl: 'lg',
    xxl: 'lg',
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Discount"
      size={modalSize}

      footer={
        <div className="flex justify-center space-x-2">
          <Button
            variant="outline"
            className="rounded-full px-16"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button className="rounded-full px-16 bg-orange-600 text-white hover:bg-orange-500">
            Apply
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-12 gap-4 p-4 mb-4">
        {[
          { label: "Broccoli Staff (on total)", id: "option1", percent: "20" },
          { label: "Fly Dubai (on total)", id: "option2", percent: "50" },
          { label: "Better homes (on total)", id: "option3", percent: "40" },
          { label: "Fly Dubai (on total)", id: "option4", percent: "35" },
          { label: "Broccoli Staff (on total)", id: "option5", percent: "45" },
          { label: "Better homes (on total)", id: "option6", percent: "25" },
        ].map((option) => (
          <div
            key={option.id}
            className={`col-span-12 sm:col-span-6 flex items-center justify-between cursor-pointer border coupanBox ${
              selectedOption === option.id
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300"
            }`}
            onClick={() => handleChange(option.id)}
          >
            <label
              htmlFor={option.id}
              className="flex items-center justify-between w-full cursor-pointer "
            >
              <div className="flex items-center p-3">
                <input
                  type="radio"
                  id={option.id}
                  name="discount"
                  className="hidden"
                  checked={selectedOption === option.id}
                  onChange={() => handleChange(option.id)}
                />
                <div
                  className={`flex items-center justify-center w-5 h-5 rounded-full mr-2 ${
                    selectedOption === option.id
                      ? "bg-orange-600 text-white"
                      : "border border-gray-400"
                  }`}
                >
                  {selectedOption === option.id && <CheckCircle2 className="h-4 w-4" />}
                </div>
                <span
                  className={`text-sm font-medium ${
                    selectedOption === option.id ? "text-black" : "text-gray-600"
                  }`}
                >
                  {option.label}
                </span>
              </div>
              <div className="ticket-shape">
                <span className="ticket-percent">{option.percent}%</span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ApplyCouponModal;
