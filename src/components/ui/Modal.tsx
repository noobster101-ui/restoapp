import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const sizeClasses = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg',
  xl: 'modal-xl',
  xxl: 'modal-2xl',
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, size = 'md' }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modalBox">
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${sizeClasses[size]} w-full modalBody`}>
        <div className="p-2 border-b border-gray-200 flex justify-between items-center modalHeader">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modalContent">{children}</div> {/* Scrollable content */}
        {footer && <div className="px-6 py-4 border-t border-gray-200 modalFooter">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
