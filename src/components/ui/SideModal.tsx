import { X } from "lucide-react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  xxl: "max-w-xxl",
};

const SideModal: React.FC<SideModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="sideModal">
      <div
        className={`bg-white h-full w-full md:w-auto ${sizeClasses[size]} transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sideModalBody`}
      >
        <div className="sideModalHeader">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="sideModalContent p-4">{children}</div>
        {footer && <div className="sideModalFooter">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default SideModal;
