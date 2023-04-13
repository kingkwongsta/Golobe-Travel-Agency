import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";
import star from "./../../../public/gold-star.png";
import google from "./../../../public/google-icon.png";
import ReviewCard from "./reviewcard";

export default function Reviews() {
  return (
    <div className="max-w-[1400px]">
      {/* TOP SECTION */}
      <div className="mb-[16px]">
        <div className="font-[600] text-[32px]">Reviews</div>
        <p className="font-[400] text-[16px]">
          What people says about Golobe facilities
        </p>
        <button className="btn bg-transparent border-[#8DD3BB] rounded-[4px] font-[500] text-[14px] text-[#112211]">
          See All
        </button>
      </div>
      {/* <----------------> */}
      <div className="carousel p-4 space-x-[48px] rounded-box">
        <ReviewCard className="carousel-item" />
        <ReviewCard className="carousel-item" />
        <ReviewCard className="carousel-item" />
        {/* <ReviewCard className="carousel-item" />
        <ReviewCard className="carousel-item" /> */}
      </div>
    </div>
  );
}
