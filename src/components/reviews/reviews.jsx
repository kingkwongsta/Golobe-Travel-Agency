import Image from "next/image";
import placeholder from "./../../../public/travel-placeholder.jpg";
import star from "./../../../public/gold-star.png";
import google from "./../../../public/google-icon.png";

export default function Reviews() {
  return (
    <div className="mx-[80px]">
      <div className="mb-[16px]">
        <div className="text-3xl">Reviews</div>
        <p className="text-lg">What people says about Golobe facilities</p>
      </div>
      <div className="carousel carousel-center max-w-[2000px] p-4 space-x-[48px] rounded-box">
        <div className="carousel-item w-[425px] h-[584px] flex flex-col">
          <p className="text-2xl">“A real sense of community, nurtured”</p>
          <p className="text-lg">
            Really appreciate the help and support from the staff during these
            tough times. Shoutout to Katie for helping me always, even when I
            was out of the country. And always available when needed.
          </p>
          <p className="text-lg">View more</p>
          <div className="starz flex flex-row gap-[12px]">
            <Image src={star} height={24} width={24} alt="star" />
            <Image src={star} height={24} width={24} alt="star" />
            <Image src={star} height={24} width={24} alt="star" />
            <Image src={star} height={24} width={24} alt="star" />
          </div>
          <div className="review-person">
            <p className="text-md">Olga</p>
            <p className="text-md">Weave Studios – Kai Tak</p>
          </div>
          <div className="review-source flex flex-row">
            <Image src={google} height={24} width={24} alt="google" />
            <p className="text-md">Google</p>
          </div>
          <Image src={placeholder} width={377} height={200} alt="text" />
        </div>
      </div>
    </div>
  );
}
