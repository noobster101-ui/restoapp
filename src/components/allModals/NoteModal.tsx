import React, { useState } from 'react';
import Modal from '../ui/Modal';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    console.log('Note added:', note);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Note"
      size="sm"
      footer={
        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            className="px-4 py-2 bg-gray-200 rounded-full"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-full"
            onClick={handleAddNote}
          >
            Add to order
          </button>
        </div>
      }
    >
      <form className="p-1">
        <label htmlFor="note">Enter order note</label>
        <textarea
          id="note"
          rows={5}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border form-control"
          placeholder="Write your order note here..."
        />
      </form>
    </Modal>
  );
};

export default NoteModal;
