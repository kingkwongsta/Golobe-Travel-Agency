import Image from "next/image";
import flightCard from "./../../public/flightcard.avif";
import stayCard from "./../../public/staycard.avif";

export default function TravelCard() {
  return (
    <div className="flex flex-row gap-[24px] mx-[32px] max-w-[1232px]">
      {/* // TRAVEL CARD */}
      <div className="relative">
        <Image
          className="max-w-[604px] max-h-[559px] rounded-[20px]"
          src={flightCard}
          width={604}
          height={559}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[150px] w-full text-center text-4xl text-neutral-50">
          Flights
        </h2>
        <div className="absolute w-full max-w-[389px]">
          <p className="absolute bottom-[80px] left-[100px] w-full text-center text-lg text-neutral-50">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <button className="absolute bottom-[20px] left-[220px] btn btn-primary">
          Show Flights
        </button>
      </div>
      {/* // STAY CARD */}
      <div className="relative">
        <Image
          className="max-w-[604px] max-h-[559px] rounded-[20px]"
          src={stayCard}
          width={604}
          height={559}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[150px] w-full text-center text-4xl text-neutral-50">
          Flights
        </h2>
        <div className="absolute w-full max-w-[389px]">
          <p className="absolute bottom-[80px] left-[100px] w-full text-center text-lg text-neutral-50">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <button className="absolute bottom-[20px] left-[220px] btn btn-primary">
          Show Flights
        </button>
      </div>
    </div>
  );
}
