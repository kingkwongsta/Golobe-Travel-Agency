export default function Subscribe() {
  return (
    <div>
      <div className="flex flex-col">
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
        <div></div>
      </div>
    </div>
  );
}
