import { InfoIcon } from "lucide-react";
import React from "react";

interface TableCardProps {
  id: number;
  name: string;
  status: "Available" | "Reserved" | "Billed" | "Available soon";
  size: "small" | "medium" | "large" | "xlarge";
  seats: number;
  selected: boolean;
  onSelect: (id: number) => void;
}

const TableCard: React.FC<TableCardProps> = ({
  id,
  name,
  status,
  size,
  seats,
  selected,
  onSelect,
}) => {
  const getStatusStyles = (status: TableCardProps["status"]) => {
    switch (status) {
      case "Available":
        return "bg-blue-100 text-blue-600 border-blue-500";
      case "Reserved":
        return "bg-orange-100 text-orange-600 border-orange-500";
      case "Billed":
        return "bg-green-100 text-green-600 border-green-500";
      case "Available soon":
        return "bg-yellow-100 text-yellow-600 border-yellow-500";
      default:
        return "bg-gray-100 text-gray-600 border-gray-500";
    }
  };

  const sizeStyles = {
    small: "small",
    medium: "medium",
    large: "large",
    xlarge: "xlarge",
  };

  const renderSeats = () => {
    let topSeats: JSX.Element[] = [];
    let bottomSeats: JSX.Element[] = [];
    let leftSeats: JSX.Element[] = [];
    let rightSeats: JSX.Element[] = [];

    if (size === "small" && seats === 2) {
      topSeats = [<div className="seat" key={`top-0`} />];
      bottomSeats = [<div className="seat" key={`bottom-0`} />];
    } else {
      const seatCount = size === "small" ? 2 : size === "medium" ? 4 : 5;

      topSeats = [...Array(seatCount)].map((_, i) => (
        <div className="seat" key={`top-${i}`} />
      ));
      bottomSeats = [...Array(seatCount)].map((_, i) => (
        <div className="seat" key={`bottom-${i}`} />
      ));
      leftSeats = [...Array(size === "small" ? 1 : 2)].map((_, i) => (
        <div className="seat vertical left" key={`left-${i}`} />
      ));
      rightSeats = [...Array(size === "small" ? 1 : 2)].map((_, i) => (
        <div className="seat vertical right" key={`right-${i}`} />
      ));
    }

    return (
      <>
        <div className="seat-row top">{topSeats}</div>
        <div className="seat-row bottom">{bottomSeats}</div>
        {leftSeats.length > 0 && (
          <div className="seat-row vertical left">{leftSeats}</div>
        )}
        {rightSeats.length > 0 && (
          <div className="seat-row vertical right">{rightSeats}</div>
        )}
      </>
    );
  };

  return (
    <div
      className={`table-card relative ${sizeStyles[size]} p-2 cursor-pointer`}
      onClick={() => onSelect(id)}
    >
      <div
        className={`table flex flex-col items-center justify-center rounded-md border-2 ${
          selected ? "border-4 border-orange-500" : getStatusStyles(status)
        }`}
      >
        <span
          className={`text-lg font-semibold ${
            selected ? "text-orange-500" : getStatusStyles(status)
          }`}
        >
          {name}
        </span>
        {status === "Reserved" && (
         <InfoIcon className="reserverdC"/>
        )}
      </div>
      <div className="seats absolute inset-0 flex flex-wrap justify-center items-center">
        {renderSeats()}
      </div>
    </div>
  );
};

export default TableCard;
