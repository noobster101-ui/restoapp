import React, { useState } from "react";
import { CalendarDays } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const generateDays = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push({ day: daysOfWeek[date.getDay()], date: date.getDate() });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const months = Array.from({ length: 12 }, (_, index) =>
  new Date(0, index).toLocaleString("default", { month: "long" })
);
const years = Array.from(new Array(101), (_, index) => 1970 + index); // Generate an array of years from 1970 to 2070

const DatePicker: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const days = generateDays(currentMonth, currentYear);

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(Number(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(Number(event.target.value));
  };

  return (
    <div className="py-4">
      {/* Date Picker Header */}
      <div className="flex justify-between items-center mb-1">
        <p className="font-bold mb-2">Select Date</p>

        <div className="flex space-x-2">
          <select
            className="text-sm font-medium text-gray-700 cursor-pointer"
            value={currentMonth}
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select
            className="text-sm font-medium text-gray-700 cursor-pointer"
            value={currentYear}
            onChange={handleYearChange}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date Picker Body */}
      <div className="flex items-center rounded-xl border border-gray-300 overflow-x-auto no-scrollbar">
        <div className="flex-shrink-0 calenderFix">
          <CalendarDays className="w-5 h-5 text-orange-500" />
        </div>

        <div className="flex items-center space-x-0 overflow-x-scroll no-scrollbar">
          {days.map((day, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center border-l border-r border-collapse dateBtn ${
                day.date === selectedDate
                  ? "bg-orange-100 text-orange-500 border-orange-500"
                  : "text-gray-700 border-gray-300"
              }`}
              onClick={() => handleDateClick(day.date)}
            >
              <span
                className={day.date === selectedDate ? "font-semibold" : " font-normal"}
              >
                {day.day}
              </span>
              <span>{day.date}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
