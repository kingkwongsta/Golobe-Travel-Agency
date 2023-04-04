import Image from "next/image";
import flightCard from "./../../public/flightcard.avif";
import stayCard from "./../../public/staycard.avif";

export default function TravelCard() {
  return (
    <div className="flex flex-row gap-[24px] mx-[32px] max-w-[1232px]">
      {/* // TRAVEL CARD */}
      <div className="relative max-w-[604px] max-h-[559px] flex justify-center">
        <Image
          className="rounded-[20px] flex-shrink-0 min-w-full max-w-full"
          src={flightCard}
          width={604}
          height={559}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[150px] w-full text-center text-4xl text-neutral-50">
          Flights
        </h2>
        <p className="absolute bottom-[90px] w-full text-center text-md text-neutral-50 max-w-[389px]">
          Search Flights & Places Hire to our most popular destinations
        </p>
        <button className="absolute bottom-[20px] btn btn-primary">
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
        <h2 className="absolute bottom-[150px] w-full text-center text-4xl text-neutral-50">
          Flights
        </h2>
        <p className="absolute bottom-[90px] w-full text-center text-md text-neutral-50 max-w-[389px]">
          Search Hotels & Places Hire to our most popular destinations
        </p>
        <button className="absolute bottom-[20px] btn btn-primary">
          Show Flights
        </button>
      </div>
    </div>
  );
}
