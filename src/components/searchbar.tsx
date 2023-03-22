import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="text-xl">Where are you flying?</div>
      <div className="input-section flex">
        <div className="relative">
          <p className="absolute top-0">hello there</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
}
