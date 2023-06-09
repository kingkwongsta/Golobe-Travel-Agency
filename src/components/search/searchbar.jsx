import { useState } from "react";
import Image from "next/image";
import airplane from "./../../../public/airplane.png";
import stays from "./../../../public/bed.png";
import cover from "./../../../public/landing-page-searchbar.avif";
import send from "./../../../public/img/send.png";

export default function SearchBar() {
  return (
    <div className="mt-[25px] mb-[140px] mx-[80px]">
      <div className="relative lg:min-w-[1380px] max-h-[581px] flex justify-center">
        <Image
          className="rounded-[24px] flex-shrink-0 min-w-full max-w-full object-cover"
          src={cover}
          width={1380}
          height={581}
          alt="cover-photo"
        />
        <div className="linearbgd"></div>
        <div className="absolute text-center bottom-[240px] z-10">
          <p className="font-[400] text-[45px] text-[#FFFFFF]">
            Helping Others
          </p>
          <p className="font-[500] text-[80px] text-[#FFFFFF] capitalize">
            LIVE & TRAVEL
          </p>
          <p className="font-[400] text-[20px] text-[#FFFFFF]">
            Special offers to suit your plan
          </p>
        </div>
        {/* Search Bar */}
        <div className="max-w-[1232px] w-full rounded-[16px] absolute bottom-[-150px] bg-white shadow-md shadow-[#8dd3bb26] z-10">
          {/* SEARCH COMPONENTS */}
          <div className="m-[24px]">
            {/*-------- FLIGHTS OR STAY --------*/}
            <div className="top-icons flex flex-row items-center gap-6">
              <div className="flex flex-row">
                <Image
                  className="mr-[9px]"
                  src={airplane}
                  height={24}
                  width={24}
                  alt="airplane"
                />
                <span className="font-[600] text-[16px] text-[#112211]">
                  Flights
                </span>
              </div>
              <div className="vertical-line border-l-[1px] h-8 mx-[16px] border-[#D7E2EE]"></div>
              <div className="flex flex-row">
                <Image
                  className="mr-[9px]"
                  src={stays}
                  height={24}
                  width={24}
                  alt="airplane"
                />
                <span className="font-[600] text-[16px] text-[#112211]">
                  Stays
                </span>
              </div>
            </div>
            {/* Horizontal Line */}
            <hr className="max-w-[110px] mt-[15px] mb-[35px] border-[2px] border-[#8DD3BB]"></hr>
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
                <Image
                  className="mr-[5px]"
                  src={send}
                  width={17}
                  height={17}
                  alt="send"
                />
                Show Flights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
