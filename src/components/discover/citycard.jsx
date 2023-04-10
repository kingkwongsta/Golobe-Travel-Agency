import Image from "next/image";
import placeholder from "./../../../public/discover-placeholder.png";

export default function CityCard({}) {
  return (
    <div className="flex items-center bg-[#ffffff] rounded-[16px] shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
      <Image
        className="mr-[16px]"
        src={placeholder}
        width={90}
        height={90}
        alt="placeholder"
      />
      <div>
        <p className="font-[600] text-[16px] text-[#112211] leading-[20px]">
          Istanbul, Turkey
        </p>
        <span className="font-[500] text-[14px] text-[#112211] leading-[17px]">
          Flights{" "}
        </span>
        <span> . </span>
        <span className="font-[500] text-[14px] text-[#112211] leading-[17px]">
          {" "}
          Hotels{" "}
        </span>
        <span> . </span>
        <span className="font-[500] text-[14px] text-[#112211] leading-[17px]">
          {" "}
          Resorts
        </span>
      </div>
    </div>
  );
}
