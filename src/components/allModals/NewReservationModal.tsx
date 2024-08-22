import React, { useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select, { SelectItem } from "../ui/LabelSelect";
import LabelInput from "../ui/LabelInput";
import useScreenSize from "../ui/ScreenSize";
import DatePicker from "../tableSelection/DatePicker";

interface NewReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewReservation: React.FC<NewReservationProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedPartySize, setSelectedPartySize] = useState<number | string>(
    2
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [guestDetails, setGuestDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    tag: [] as string[],
    visitNote: "",
    takenBy: "",
    pagerNumber: "",
  });

  const partySizes = [1, 2, 3, 4, 5, 6, 7, "8+"];
  const timeSlots = [
    "09:00 AM",
    "09:15 AM",
    "11:00 AM",
    "12:45 PM",
    "01:00 PM",
    "01:15 PM",
    "02:45 PM",
    "03:00 PM",
    "05:15 PM",
    "06:00 PM",
    "07:15 PM",
    "07:45 PM",
    "08:30 PM",
    "08:45 PM",
    "09:00 PM",
  ];

  const modalSize = useScreenSize<"sm" | "md" | "lg" | "xl" | "xxl">({
    base: "md",
    sm: "xxl",
    md: "xl",
    lg: "md",
    xl: "md",
    xxl: "md",
  });

  const handleContinue = () => {
    if (step === 1) {
      setStep(2); // Move to the second step
    } else {
      // Handle the final submission
      onClose();
    }
  };

  const handleBack = () => {
    setStep(1); // Go back to the first step
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step === 1 ? "New Reservation" : "Guest Detail"}
      size={modalSize}
      footer={
        <div className="grid grid-cols-2">
          <Button
            variant="outline"
            className="rounded-full mr-2"
            onClick={step === 1 ? onClose : handleBack}
          >
            {step === 1 ? "Cancel" : "Back"}
          </Button>
          <Button className="rounded-full" onClick={handleContinue}>
            {step === 1 ? "Continue" : "Save"}
          </Button>
        </div>
      }
    >
      {step === 1 ? (
        <form className="p-4 mb-3 space-y-3">
          <p className="font-bold mb-2">Select party size</p>
          <div className="grid grid-cols-8 partyBtn">
            {partySizes.map((size, index) => (
              <label
                key={size}
                className={`cursor-pointer px-4 py-2 ${
                  selectedPartySize === size
                    ? "bg-orange-100 text-orange-500 border-orange-500"
                    : "bg-white text-gray-700 border-gray-300"
                } ${
                  index === 0
                    ? "rounded-l-lg"
                    : index === partySizes.length - 1
                    ? "rounded-r-lg"
                    : ""
                } flex items-center justify-center`}
              >
                <input
                  type="radio"
                  name="partySize"
                  value={size}
                  checked={selectedPartySize === size}
                  onChange={() => setSelectedPartySize(size)}
                  className="hidden"
                />
                {size}
              </label>
            ))}
          </div>

          <DatePicker />

          <p className="font-bold mb-2">Time slot available</p>
          <div className="timeSlotContainer">
            {timeSlots.map((time, index) => (
              <label
                key={time}
                className={`${selectedTimeSlot === time ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={time}
                  checked={selectedTimeSlot === time}
                  onChange={() => setSelectedTimeSlot(time)}
                  className="hidden"
                />
                {time}
              </label>
            ))}
          </div>
        </form>
      ) : (
        <form className="p-4 mb-3">
          <div className="grid grid-cols-1 mb-3">
            <LabelInput
              name="fullName"
              label="Full name"
              placeholder="Enter full name"
              value={guestDetails.fullName}
              onChange={(e) =>
                setGuestDetails({ ...guestDetails, fullName: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            <LabelInput
              name="email"
              label="Email"
              placeholder="Enter email address"
              value={guestDetails.email}
              onChange={(e) =>
                setGuestDetails({ ...guestDetails, email: e.target.value })
              }
            />
            <LabelInput
              name="phoneNumber"
              label="Phone number"
              placeholder="Enter phone number"
              value={guestDetails.phoneNumber}
              onChange={(e) =>
                setGuestDetails({
                  ...guestDetails,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-1 px-3">
            <label className="block">
              Tags
            </label>
          </div>

          <div className="flex flex-wrap gap-2 px-3 mb-4">
            {[
              "VIP",
              "Birthday",
              "Anniversary",
              "Private Dining",
              "First time",
            ].map((tag) => (
              <label
                key={tag}
                className={`cursor-pointer border rounded-full ${
                  guestDetails.tag.includes(tag)
                    ? "bg-orange-100 text-orange-500 border-orange-500"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                style={{padding:"4px 10px"}}
              >
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  checked={guestDetails.tag.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setGuestDetails({
                        ...guestDetails,
                        tag: [...guestDetails.tag, tag],
                      });
                    } else {
                      setGuestDetails({
                        ...guestDetails,
                        tag: guestDetails.tag.filter((t) => t !== tag),
                      });
                    }
                  }}
                  className="hidden"
                />
                {tag}
              </label>
            ))}
          </div>
          
          <div className="grid grid-cols-1 mb-3">
           
            <LabelInput
              name="visitNote"
              label="Visit note"
              placeholder="Write reservation note here..."
              value={guestDetails.visitNote}
              onChange={(e) =>
                setGuestDetails({ ...guestDetails, visitNote: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            <LabelInput
              name="pagerNumber"
              label="Pager number"
              placeholder="Enter pager number"
              value={guestDetails.pagerNumber}
              onChange={(e) =>
                setGuestDetails({
                  ...guestDetails,
                  pagerNumber: e.target.value,
                })
              }
            />
             <LabelInput
              name="takenBy"
              label="Taken by (Initials)"
              placeholder="Enter initials"
              value={guestDetails.takenBy}
              onChange={(e) =>
                setGuestDetails({ ...guestDetails, takenBy: e.target.value })
              }
            />
          </div>

        </form>
      )}
    </Modal>
  );
};

export default NewReservation;
