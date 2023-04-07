import Image from "next/image";
import mail from "./../../../public/img/mailbox.png";

export default function Subscribe() {
  return (
    <div className="flex flex-row bg-[#CDEAE1]">
      {/* LEFT SIDE */}
      <div className="flex flex-col basis-[808px]">
        <p className="text-[44px] font-[700] leading-[54px] text-[#112211]">
          Subscribe
        </p>
        <p className="text-[44px] font-[700] leading-[54px] text-[#112211]">
          Newsletter
        </p>
        <p className="text-[700] text-[20px] leading-[25px] text-[#112211]">
          The Travel
        </p>
        <p className="text-[500] text-[16px] leading-[20px] text-[#112211]">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Your email address"
            className="input w-full max-w-[473px] max-h-[56px] text-[400] text-[16px] leading-[20px] text-[#1C1B1F]"
          />
          <button className="btn text-[600] text-[14px] leading-[17px] text-[#FFFFFF]">
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
