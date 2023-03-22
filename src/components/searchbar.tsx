import { useState } from "react";
import DatePicker from "react-datepicker";

export default function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="text-xl">Where are you flying?</div>
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
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
    </>
  );
}
