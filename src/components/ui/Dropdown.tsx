// /components/ui/Dropdown.tsx
import React, { useState } from "react";
import {
  ChevronDown,
  Check,
  CheckCircle2,
  CircleCheckBigIcon,
} from "lucide-react";
import clsx from "clsx";

interface DropdownOption {
  label: string;
  value: string;
  icon: React.ReactNode; // Added icon prop to each option
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  label: string;
  buttonClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onChange,
  label,
  buttonClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelectedValue, setTempSelectedValue] = useState(selectedValue); // Temporary state for selected value

  const handleSelect = (value: string) => {
    setTempSelectedValue(value); // Update temporary selection
  };

  const handleApply = () => {
    onChange(tempSelectedValue); // Confirm selection
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={clsx(
          " px-4 py-1 border-0 border-gray-300 rounded-full text-orange-500 bg-orange-100 text-md font-semibold dineBtn",
          buttonClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-20 dropdownBox">
          <div className="dropdown-arrow-border"></div>
          <div className="dropdown-arrow"></div>
          <ul className="p-1">
            {options.map((option) => (
              <li
                key={option.value}
                className={clsx(
                  "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-orange-100 rounded-xl",
                  {
                    "text-orange-500 border-orange": tempSelectedValue === option.value,
                    "text-gray-700": tempSelectedValue !== option.value,
                    "bg-orange-100": tempSelectedValue === option.value,
                  }
                )}
                onClick={() => handleSelect(option.value)}
              >
                <p className="flex">
                  {option.icon}
                  <span className="ml-0">{option.label}</span>
                </p>
                {tempSelectedValue === option.value && (
                  <CircleCheckBigIcon className="ml-auto text-orange-500 w-4 h-4" />
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-around items-center px-4 py-3 border-t border-gray-200">
            <button
              className="text-orange-500 border border-orange-500 rounded-full py-1 hover:bg-orange-50 mr-2"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="text-white bg-orange-500 rounded-full py-1 hover:bg-orange-600"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
