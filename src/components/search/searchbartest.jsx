import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";

export default function SearchBar() {
  return (
    <div className="mx-[32px] max-w-[1232px]">
      <div className="flex">
        <div className="flex-1 relative">test</div>
        <div className="flex-1 relative">test</div>
        <div className="flex-1 relative">test</div>
      </div>
      {/*-------- TRAVEL INPUT --------*/}
      {/* <div className="input-section grid grid-flow-col auto-cols-max gap-8 my-6"> */}
      {/* <div className="input-section flex auto-cols-max gap-8 my-6">
        <div className="from-input flex-1 relative ">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">From - To</span>
          </p>
          <input
            type="text"
            placeholder="Los Angeles - Taipei"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input flex-1 relative ">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">Depart - Return</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="from-input flex-1 relative ">
          <p className="absolute top-[-12px] left-[10px]">
            <span className="bg-white pl-2 pr-1.5">Passenger - Class</span>
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div> */}
    </div>
  );
}
