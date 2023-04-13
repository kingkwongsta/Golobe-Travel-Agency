import Image from "next/image";
import mail from "./../../../public/img/mailbox.png";

export default function Subscribe() {
  return (
    <div className="flex flex-row bg-[#CDEAE1] my-[80px] mx-[80px] lg:min-w-[1232px] min-h-[305px] rounded-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col basis-[808px] mt-[24px] ml-[24px]">
        <p className="text-[44px] font-[600] leading-[54px] text-[#112211]">
          Subscribe
        </p>
        <p className="mb-[24px] text-[44px] font-[600] leading-[54px] text-[#112211]">
          Newsletter
        </p>
        <p className="mb-[8px]  opacity-[.8] font-[700] text-[20px] leading-[25px] text-[#112211]">
          The Travel
        </p>
        <p className="mb-[16px] opacity-[.7] font-[500] text-[16px] leading-[20px] text-[#112211]">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Your email address"
            className="mr-[16px] input w-full max-w-[473px] max-h-[56px] text-[400] text-[16px] leading-[20px] text-[#1C1B1F]"
          />
          <button className="btn font-[600] text-[14px] leading-[17px] text-[#FFFFFF] normal-case bg-[#112211]">
            Subscribe
          </button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div>
        <Image src={mail} width={400} height={305} alt="mailbox" />
      </div>
    </div>
  );
}
