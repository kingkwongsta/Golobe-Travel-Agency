import Image from "next/image";
import mail from "./../../../public/img/mailbox.png";

export default function Subscribe() {
  return (
    <div className="flex flex-row">
      {/* LEFT SIDE */}
      <div className="flex flex-col basis-[808px]">
        <p>Subscribe</p>
        <p>Newsletter</p>
        <p>The Travel</p>
        <p>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Your email address"
            className="input w-full max-w-[473px] max-h-[56px]"
          />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div>
        <Image src={mail} width={400} height={305} alt="mailbox" />
      </div>
    </div>
  );
}
