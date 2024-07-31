'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const WelcomePage = () => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const user = {
    name: 'Bean Kean',
    imgSrc: '/user1.png',
    company: 'Coca Coffeetalk',
  };

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  }).replace(/ AM| PM/, '');;
  const period = currentTime.toLocaleTimeString([], { hour12: true }).slice(-2);

  return (
    <div className="welcome-background min-h-screen flex flex-col items-center justify-center text-white userSelection">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-8xl font-light">
          {formattedTime}
          <span className="text-4xl font-thin ml-1">{period}</span>
        </h1>
        <p className="text-md font-thin my-2">
          {currentTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="flex items-center justify-center mt-8 userBox">
          <Image
            src={user.imgSrc}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full mr-4 welcomeimg"
          />
          <div className="text-left">
            <h2 className="text-md font-semibold">{user.company}</h2>
            <p className="text-sm">
              Logged in as, <span className="font-semibold">{user.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
