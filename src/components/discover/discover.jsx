import CityCard from "./citycard";

export default function Discovery() {
  function renderCityElements() {
    const cityElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return cityElements.map((x, index) => <CityCard key={index} />);
  }
  return (
    <div className="mx-[32px]">
      <div className="flex flex-row justify-between content-center mb-[40px]">
        <div>
          <h2 className="mb-[16px] text-3xl">Plan your perfect trip</h2>
          <p className="text-lg">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <button className="btn btn-outline">See more places</button>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">{renderCityElements()}</div>
    </div>
  );
}
