import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";
import starImg from "./../../../public/gold-star.png";
import google from "./../../../public/google-icon.png";
import { render } from "react-dom";

export default function ReviewCard({ tagline, review, star, name, source }) {
  function renderStarElements() {
    const starArray = [];
    for (let i = 0; i < star; i++) {
      starArray.push("star");
    }
    return starArray.map((x, index) => {
      return (
        <Image key={index} src={starImg} height={24} width={24} alt="star" />
      );
    });
  }
  return (
    <>
      <div className="w-[450px] h-[608px]">
        <div>
          <div className="w-[425px] h-[584px] flex flex-col shadow-md shadow-[#1122111a] rounded-[20px] bg-white absolute p-[24px] z-50">
            <p className="text-[24px] font-[700] mb-[30px]">{tagline}</p>
            <p className="text-[14px] font-[500] mb-[12px]">{review}</p>
            <p className="text-[14px] font-[700] mb-[16px] text-right">
              View more
            </p>
            {/* -----STARS----- */}
            <div className="starz flex flex-row gap-[12px] mb-[20px]">
              {renderStarElements()}
            </div>
            <div className="review-person mb-[12px]">
              <p className="text-[14px] font-[700]">{name}</p>
              <p className="text-[12px] font-[500]">{source}</p>
            </div>
            <div className="review-source flex flex-row mb-[40px]">
              <Image src={google} height={24} width={24} alt="google" />
              <p className="text-[12px] font-[700]">Google</p>
            </div>
            <Image
              className="max-w-[377px] max-h-[200px] rounded-md"
              src={placeholder}
              width={377}
              height={200}
              alt="text"
            />
          </div>
          <div className="relative bg-[#8dd3bb66] w-[425px] h-[586px] -bottom-[24px] -right-[26px] rounded-[20px]"></div>
        </div>
      </div>
    </>
  );
}
