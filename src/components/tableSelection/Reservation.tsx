import React, { useState } from "react";
import DatePicker from "./DatePicker";
import NewReservation from "../allModals/NewReservationModal";
import { User2 } from "lucide-react";

interface Reservation {
  customerName: string;
  time: string;
  table: string;
  order: number;
}

const reservations: Reservation[] = [
  { customerName: "Matilda R", time: "08:00 AM", table: "T-11", order: 12 },
  { customerName: "Margaret", time: "08:00 AM", table: "T-8", order: 2 },
  { customerName: "Joseph M", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "Maikhel D", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "Wesley", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "Francis Eli", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "John Sparrow", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "Cecilia F", time: "08:00 AM", table: "T-7", order: 2 },
  { customerName: "Rodnew", time: "08:00 AM", table: "T-7", order: 2 },
];

const Reservation: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservationModal = () => {
    setIsReservationOpen(true);
  };

  const closeReservationModal = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="p-1">
      <div className="bg-white shadow px-2 rounded-xl mb-4">
        <DatePicker />
      </div>

      <table className="w-full px-2 border-b">
        <thead>
          <tr className="text-left text-sm font-medium text-gray-400">
            <th className="py-2">CUSTOMER NAME</th>
            <th className="py-2">TIME</th>
            <th className="py-2">TABLE</th>
            <th className="py-2">ORDER</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {reservations.map((reservation, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-2">{reservation.customerName}</td>
              <td className="py-2">{reservation.time}</td>
              <td className="py-2">{reservation.table}</td>
              <td className="py-2 flex  item-center">
                <User2 className="h-4 text-gray-400" />
                <span>{reservation.order}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Reservation Button */}
      <div className="mt-5">
        <button
          className="w-full py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600"
          onClick={openReservationModal}
        >
          Add new reservation
        </button>

        <NewReservation
          isOpen={isReservationOpen}
          onClose={closeReservationModal}
        />
      </div>
    </div>
  );
};

export default Reservation;
