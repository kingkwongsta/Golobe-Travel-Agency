import Image from "next/image";
import placeholder from "./../../../public/discover-placeholder.png";

export default function CityCard({}) {
  return (
    <div className="flex items-center">
      <Image
        className="mr-[16px]"
        src={placeholder}
        width={90}
        height={90}
        alt="placeholder"
      />
      <div>
        <p className="text-[600] text-[16px] text-[#112211] leading-[20px]">
          Istanbul, Turkey
        </p>
        <span className="text-[500] text-[14px] text-[#112211] leading-[17px]">
          Flights{" "}
        </span>
        <span> . </span>
        <span className="text-[500] text-[14px] text-[#112211] leading-[17px]">
          {" "}
          Hotels{" "}
        </span>
        <span> . </span>
        <span className="text-[500] text-[14px] text-[#112211] leading-[17px]">
          {" "}
          Resorts
        </span>
      </div>
    </div>
  );
}
