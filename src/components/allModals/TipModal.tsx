import React, { useState } from 'react';
import Modal from '../ui/Modal';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TipModal: React.FC<TipModalProps> = ({ isOpen, onClose }) => {
  const [note, setNote] = useState('');

  const handleAddTip = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Tip Amount"
      size="sm"
      footer={
        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            className="px-8 py-2 bg-gray-200 rounded-full"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-full"
            onClick={handleAddTip}
          >
            Add Tip Amount
          </button>
        </div>
      }
    >
      <form className="p-4">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-4 border form-control"
          placeholder="Input Amount"
        />
      </form>
    </Modal>
  );
};

export default TipModal;
