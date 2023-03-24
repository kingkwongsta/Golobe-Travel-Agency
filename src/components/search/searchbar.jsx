import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";

export default function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/*-------- FLIGHTS OR STAY --------*/}
      <div className="top-icons flex flex-row gap-6">
        <div className="flex flex-row">
          <Image src={airplane} height={24} width={24} alt="airplane" />
          <span>Flights</span>
        </div>
        <div className="vertical-line border-l-[1px] h-8"></div>
        <div className="flex flex-row">
          <Image src={stays} height={24} width={24} alt="airplane" />
          <span>Stays</span>
        </div>
      </div>
      {/*-------- TRAVEL INPUT --------*/}
      <div className="input-section flex mt-[32px]">
        <div className="from-input relative">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">From - To</span>
          </p>
          <input
            type="text"
            placeholder="Los Angeles - Taipei"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input relative">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">Depart - Return</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input relative">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">Passenger - Class</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      {/*-------- PROMO + SHOW OPTIONS BUTTON --------*/}
    </>
  );
}
