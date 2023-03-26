import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";

export default function SearchBar() {
  return (
    <div className="mx-[32px] max-w-[1232px]">
      {/*-------- FLIGHTS OR STAY --------*/}
      <div className="top-icons flex flex-row items-center gap-6 my-6">
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
      <div className="input-section flex flex-wrap gap-6 my-6">
        <div className="from-input relative grow-[3]">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">From - To</span>
          </p>
          <input
            type="text"
            placeholder="Los Angeles - Taipei"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input relative grow-[3]">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">Depart - Return</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input relative grow-[3]">
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
      <div className="flex flex-row justify-end items-center gap-6 my-6">
        <p>+ Add Promo Code</p>
        <button className="btn btn-primary">Show Flights</button>
      </div>
    </div>
  );
}