import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";
import cover from "./../../../public/landing-page-searchbar.avif";

export default function SearchBar() {
  return (
    <div className="mt-[40px] mb-[180px] mx-[80px] max-w-[1380px]">
      <div className="relative max-w-[1380px] max-h-[581px] flex justify-center lg:min-w-[1380px]">
        <Image
          className="rounded-[24px] flex-shrink-0 min-w-full max-w-full object-cover"
          src={cover}
          width={1380}
          height={581}
          alt="cover-photo"
        />
        {/* Search Bar */}
        <div className="max-w-[1232px] w-full rounded-[16px] absolute bottom-[-150px] bg-white shadow-md shadow-[#8dd3bb26]">
          {/* SEARCH COMPONENTS */}
          <div className="m-[24px]">
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
                  <span className="bg-white pl-2 pr-1.5 font-[400] text-[14px] text-[#112211]">
                    From - To
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Los Angeles - Taipei"
                  className="input input-bordered w-full max-w-xs font-[400] text-[16px] text-[#1C1B1F]"
                />
              </div>
              <div className="from-input relative flex-1">
                <p className="absolute top-[-12px] left-[10px]">
                  <span className="bg-white pl-2 pr-1.5 font-[400] text-[14px] text-[#112211]">
                    Depart - Return
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs font-[400] text-[16px] text-[#1C1B1F]"
                />
              </div>
              <div className="from-input relative flex-1">
                <p className="absolute top-[-12px] left-[10px]">
                  <span className="bg-white pl-2 pr-1.5 font-[400] text-[14px] text-[#112211]">
                    Passenger - Class
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs font-[400] text-[16px] text-[#1C1B1F]"
                />
              </div>
            </div>
            {/*-------- PROMO + SHOW OPTIONS BUTTON --------*/}
            <div className="flex flex-row justify-end items-center gap-6 my-6">
              <p className="font-[500] text-[14px] text-[#112211]">
                + Add Promo Code
              </p>
              <button className="btn btn-primary font-[500] text-[14px] text-[#112211] max-h-[48px] capitalize bg-[#8DD3BB]">
                Show Flights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
