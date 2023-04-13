import Image from "next/image";
import flightCard from "./../../public/flightcard.avif";
import stayCard from "./../../public/staycard.avif";
import send from "./../../public/img/send.png";

export default function TravelCard() {
  return (
    <div className="flex flex-row gap-[24px] my-[40px] mx-[80px] max-w-[1232px]">
      {/* // TRAVEL CARD */}
      <div className="relative max-w-[604px] max-h-[559px] flex justify-center">
        <Image
          className="rounded-[20px] flex-shrink-0 min-w-full max-w-full"
          src={flightCard}
          width={604}
          height={559}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[150px] w-full text-center font-[500] text-[40px] leading-[51px] text-[#FFFFFF] ">
          Flights
        </h2>
        <p className="absolute bottom-[90px] w-full text-center font-[400] text-[16px] leading-[20px] text-[#FFFFFF] max-w-[389px]">
          Search Flights & Places Hire to our most popular destinations
        </p>
        <button className="absolute bottom-[20px] btn btn-primary font-[500] text-[14px] leading-[17px] text-[#112211] bg-[#8DD3BB] normal-case">
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
      {/* // STAY CARD */}
      <div className="relative max-w-[604px] max-h-[559px] flex justify-center">
        <Image
          className="rounded-[20px] flex-shrink-0 min-w-full max-w-full"
          src={stayCard}
          width={604}
          height={559}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[150px] w-full text-center font-[500] text-[40px] leading-[51px] text-[#FFFFFF]">
          Hotels
        </h2>
        <p className="absolute bottom-[90px] w-full text-center font-[400] text-[16px] leading-[20px] text-[#FFFFFF] max-w-[389px]">
          Search Hotels & Places Hire to our most popular destinations
        </p>
        <button className="absolute bottom-[20px] btn btn-primary font-[500] text-[14px] leading-[17px] text-[#112211] bg-[#8DD3BB] normal-case">
          <Image
            className="mr-[5px]"
            src={send}
            width={17}
            height={17}
            alt="send"
          />
          Show Hotels
        </button>
      </div>
    </div>
  );
}
