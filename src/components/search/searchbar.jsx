import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";
import cover from "./../../../public/landing-page-searchbar.avif";

export default function SearchBar() {
  return (
    <div className="my-[80px] mx-[80px]">
      <div className="relative">
        <Image src={cover} width={1380} height={581} alt="cover-photo" />
        {/* Search Bar */}
        <div className="max-w-[1232px] w-full border-2 border-solid border-blue-500 absolute bottom-[-150px] bg-white">
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
          <div className="input-section flex gap-8 my-6">
            <div className="from-input relative flex-1">
              <p className="absolute top-[-12px] left-[10px]">
                <span className="bg-white pl-2 pr-1.5">From - To</span>
              </p>
              <input
                type="text"
                placeholder="Los Angeles - Taipei"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="from-input relative flex-1">
              <p className="absolute top-[-12px] left-[10px]">
                <span className="bg-white pl-2 pr-1.5">Depart - Return</span>
              </p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="from-input relative flex-1">
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
      </div>
    </div>
  );
}
