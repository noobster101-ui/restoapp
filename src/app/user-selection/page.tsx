"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserComponent from "../../components/ui/UserComponent";
import PinInputComponent from "../../components/ui/PinInputComponent";

// Dynamically import SlickCarousel
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const users = [
  { id: 1, name: "Nirmala Azalea", imgSrc: "/user1.png" },
  { id: 2, name: "Beby Jovancy", imgSrc: "/user2.png" },
  { id: 3, name: "Aush Zidni", imgSrc: "/user3.png" },
  { id: 4, name: "Bena Kane", imgSrc: "/user4.png" },
  { id: 5, name: "Nirmala Azalea", imgSrc: "/user1.png" },
  { id: 6, name: "Beby Jovancy", imgSrc: "/user2.png" },
  { id: 7, name: "Aush Zidni", imgSrc: "/user3.png" },
  { id: 8, name: "Bena Kane", imgSrc: "/user4.png" },
  { id: 9, name: "Nirmala Azalea", imgSrc: "/user1.png" },
  { id: 10, name: "Beby Jovancy", imgSrc: "/user2.png" },
  { id: 11, name: "Aush Zidni", imgSrc: "/user3.png" },
  { id: 12, name: "Bena Kane", imgSrc: "/user4.png" },
];

const UserSelection = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(1);
  const [showPinInput, setShowPinInput] = useState(false);
  const mainSliderRef = useRef<any>(null);
  const navSliderRef = useRef<any>(null);

  useEffect(() => {
    setSelectedUser(1); // Default selection to the first user
  }, []);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    asNavFor: navSliderRef.current,
    ref: mainSliderRef, // Use ref here
  };

  const navSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    asNavFor: mainSliderRef.current,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    ref: navSliderRef, // Use ref here
  };

  const handleUserClick = (id: number, index: number) => {
    setSelectedUser(id);
    setShowPinInput(false);
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  const handleClockIn = () => {
    setShowPinInput(true);
  };

  const handleUnlock = (pin: string) => {
    console.log("PIN entered:", pin);
    // Handle PIN validation here
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center userSelection">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-6 col-md-10 col-sm-11">
            <Slider
              {...navSettings}
              className={`${showPinInput ? "scale-half" : ""}`}
            >
              {users.map((user, index) => (
                <UserComponent
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  imgSrc={user.imgSrc}
                  selected={selectedUser === user.id}
                  onClick={() => handleUserClick(user.id, index)}
                />
              ))}
            </Slider>
            <h2 className="text-2xl text-white mb-4">
              {users.find((user) => user.id === selectedUser)?.name}
            </h2>
            {selectedUser !== null && !showPinInput && (
              <div className="my-4">
                <div className="flex justify-center space-x-4">
                  <button
                    className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full mb-3 btn1"
                    onClick={handleClockIn}
                  >
                    Clock in
                  </button>
                  <button className="w-full py-2 bg-white hover:bg-gray-600 text-orange-500 rounded-full mb-3 btn1">
                    Clock out
                  </button>
                </div>
              </div>
            )}
            {showPinInput && <PinInputComponent onUnlock={handleUnlock} />}
            {!showPinInput && (
              <button className="w-full py-2 bg-transparent border border-orange-500 hover:bg-orange-600 text-orange-500 rounded-full mb-3 btn-blur btn2">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
