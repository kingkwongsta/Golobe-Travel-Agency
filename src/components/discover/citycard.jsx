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
        <p>Istanbul, Turkey</p>
        <span>Flights </span>
        <span> . </span>
        <span> Hotels </span>
        <span> . </span>
        <span> Resorts</span>
      </div>
    </div>
  );
}
