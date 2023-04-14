import Subscribe from "./../components/subscribe/subscribe";

export default function Footer() {
  return (
    <div className="">
      <div className="w-[1440px] h-[422px] bg-[#8DD3BB] pt-[218px] flex flex-row justify-between px-[104px] relative">
        <div>
          <p>hello</p>
          <p>icons</p>
        </div>
        {/* OUR DESTINATIONS */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-[700] text-[16px] text-[#112211] mb-[4px]">
            Our Destinations
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Canada
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Alaska
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            France
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Iceland
          </p>
        </div>
        {/* OUR ACTIVITIES */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-[700] text-[16px] text-[#112211] mb-[4px]">
            Our Activities
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Northern Lights
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Cruising & sailing
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Multi-activities
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Kayaking
          </p>
        </div>
        {/* TRAVEL BLOGS */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-[700] text-[16px] text-[#112211] mb-[4px]">
            Travel Blogs
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Bali Travel Guide
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Sri Lanka Travel Guide
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Peru Travel Guide{" "}
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            France Travel Guide{" "}
          </p>
        </div>
        {/* ABOUT US */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-[700] text-[16px] text-[#112211] mb-[4px]">
            About Us
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Our Story
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Work with us
          </p>
        </div>
        {/* CONTACT US */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-[700] text-[16px] text-[#112211] mb-[4px]">
            Contact Us
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            FAQ
          </p>
          <p className="font-[500] text-[14px] text-[#112211] opacity-[.7]">
            Contact Info
          </p>
        </div>
        <Subscribe className="absolute bottom-[200px] left-[200px]" />
      </div>
    </div>
  );
}
