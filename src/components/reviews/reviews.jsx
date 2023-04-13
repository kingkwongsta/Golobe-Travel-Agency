import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";
import star from "./../../../public/gold-star.png";
import google from "./../../../public/google-icon.png";
import ReviewCard from "./reviewcard";
import reviewData from "./../../pages/api/reviewData";

export default function Reviews() {
  function renderReviewCards() {
    return reviewData.map((x, index) => {
      return (
        <ReviewCard
          className="carousel-item"
          key={index}
          tagline={x.tagline}
          review={x.review}
          star={x.star}
          name={x.name}
          source={x.source}
        />
      );
    });
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-[80px] mt-[80px] mb-[40px] lg:min-w-[1232px] max-w-[1232px] flex justify-between">
        {/* TOP SECTION */}
        <div>
          <p className="font-[600] text-[32px]">Reviews</p>
          <p className="font-[400] text-[16px]">
            What people says about Golobe facilities
          </p>
        </div>
        <button className="btn bg-transparent border-[#8DD3BB] rounded-[4px] font-[500] text-[14px] text-[#112211]">
          See All
        </button>
        {/* <----------------> */}
      </div>

      <div className="carousel p-4 space-x-[48px] rounded-box ml-[200px]">
        {renderReviewCards()}
      </div>
    </div>
  );
}
