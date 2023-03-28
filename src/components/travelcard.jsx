import Image from "next/image";
export default function TravelCard() {
  return (
    <div className="relative">
      <Image
        className="max-w-[604px] max-h-[559px]"
        src="https://images.unsplash.com/photo-1609408341205-861253559a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        width={604}
        height={559}
        alt="flight bgd"
      />
      <h2 className="absolute bottom-28 w-full text-center text-4xl text-neutral-50">
        Flights
      </h2>
      <p className="max-w-[389px] absolute bottom-24 w-full text-center text-lg text-neutral-50">
        Search Flights & Places Hire to our most popular destinations
      </p>
    </div>
  );
}
