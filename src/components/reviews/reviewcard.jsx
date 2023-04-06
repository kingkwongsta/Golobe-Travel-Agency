import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";
import star from "./../../../public/gold-star.png";
import google from "./../../../public/google-icon.png";

export default function ReviewCard() {
  return (
    <>
      <div className="w-[450px] h-[608px]">
        <div>
          <div className="w-[425px] h-[584px] flex flex-col shadow-md shadow-[#1122111a] rounded-[20px] bg-white absolute p-[24px] z-50">
            <p className="text-[24px] mb-[30px]">
              “A real sense of community, nurtured”
            </p>
            <p className="text-[14px] mb-[12px]">
              Really appreciate the help and support from the staff during these
              tough times. Shoutout to Katie for...
            </p>
            <p className="text-[14px] mb-[16px] text-right">View more</p>
            <div className="starz flex flex-row gap-[12px] mb-[20px]">
              <Image src={star} height={24} width={24} alt="star" />
              <Image src={star} height={24} width={24} alt="star" />
              <Image src={star} height={24} width={24} alt="star" />
              <Image src={star} height={24} width={24} alt="star" />
            </div>
            <div className="review-person">
              <p className="text-[14px]">Olga</p>
              <p className="text-[12px]">Weave Studios – Kai Tak</p>
            </div>
            <div className="review-source flex flex-row">
              <Image src={google} height={24} width={24} alt="google" />
              <p className="text-[12px]">Google</p>
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
