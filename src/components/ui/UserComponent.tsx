'use client';

import Image from 'next/image';
import React from 'react';

interface UserComponentProps {
  id: number;
  name: string;
  imgSrc: string;
  selected: boolean;
  onClick: () => void;
}

const UserComponent: React.FC<UserComponentProps> = ({ id, name, imgSrc, selected, onClick }) => {
  return (
    <div
      className={`relative text-center cursor-pointer duration-300 my-3 ${
        selected ? 'opacity-1' : 'opacity-70'
      }`}
      onClick={onClick}
    >
      <Image
        src={imgSrc}
        alt={name}
        width={100}
        height={100}
        className={`rounded-full border-4 mx-auto ${
          selected ? 'border-orange-500' : 'border-transparent'
        }`}
      />
      <p className="mt-2 text-white">{name}</p>
    </div>
  );
};

export default UserComponent;
