import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";

export default function Reviews() {
  return (
    <div className="carousel carousel-center max-w-[2000px] mx-[80px] p-4 space-x-[48px] rounded-box">
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
      <div className="carousel-item">
        <Image src={placeholder} width={400} height={800} alt="text" />
      </div>
    </div>
  );
}
