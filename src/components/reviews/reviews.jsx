import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";

export default function Reviews() {
  return (
    <div className="mx-[80px]">
      <div className="mb-[16px]">
        <div className="text-3xl">Reviews</div>
        <p className="text-lg">What people says about Golobe facilities</p>
      </div>
      <div className="carousel carousel-center max-w-[2000px] p-4 space-x-[48px] rounded-box">
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
    </div>
  );
}
