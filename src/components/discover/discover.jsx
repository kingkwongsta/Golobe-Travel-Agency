import CityCard from "./citycard";

export default function Discovery() {
  function renderCityElements() {
    const cityElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return cityElements.map((x, index) => <CityCard key={index} />);
  }
  return (
    <div className="my-[80px] mx-[80px] max-w-[1232px]">
      <div className="flex flex-row justify-between content-center mb-[40px]">
        <div>
          <h2 className="mb-[16px] font-[600] text-[32px] leading-[39px] text-[#000000]">
            Plan your perfect trip
          </h2>
          <p className="font-[400] text-[16px] leading-[20px] text-[#112211] opacity-[.75]">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <button className="btn btn-outline min-w-[149px] text-[14px] font-[500] text-[#112211] normal-case border-[#8DD3BB]">
          See more places
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">{renderCityElements()}</div>
    </div>
  );
}
