"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PinInputComponentProps {
  onUnlock: (pin: string) => void;
}

const PinInputComponent: React.FC<PinInputComponentProps> = ({ onUnlock }) => {
  const [pin, setPin] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (key >= "0" && key <= "9") {
        handlePinClick(key);
      } else if (key === "Backspace") {
        handlePinClick("X");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pin]);

  const handlePinClick = (value: string) => {
    if (value === "C") {
      setPin("");
    } else if (value === "X") {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 6) {
      // limit the PIN to 6 digits
      setPin(pin + value);
    }
  };

  const handleUnlock = () => {
    onUnlock(pin);
    router.push("/welcome");
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl text-white mb-4">Enter your PIN</h2>
      <input
        type="password"
        value={pin}
        className="pin-input mb-4 text-center text-2xl text-white"
        maxLength={6}
        readOnly
      />
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-3 gap-4">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "X"].map(
            (key) => (
              <button
                key={key}
                className="px-4 py-2 bg-white text-black rounded-full text-2xl pin-button"
                onClick={() => handlePinClick(key)}
              >
                {key}
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="w-full max-w-xs px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full mb-3"
          onClick={handleUnlock}
        >
          Unlock
        </button>
      </div>

      <p className="text-white d-block font-light my-2 pt-3">
        Check in/ Check-out
      </p>
    </div>
  );
};

export default PinInputComponent;
