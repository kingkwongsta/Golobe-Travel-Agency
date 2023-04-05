import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";

export default function Reviews() {
  return (
    <div className="carousel rounded-box w-96">
      <div className="carousel-item w-1/2">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item w-1/2">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item w-1/2">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item w-1/2">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
    </div>
  );
}
