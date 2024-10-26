

const Pricing = () => {
  return (
    <div className="w-full flex justify-center bg-slate-700">
      <div className="max-w-[355px] lg:max-w-screen-xl px-5 lg:px-20 pt-10 lg:py-40 pb-20 flex flex-col gap-10 lg:gap-20 text-white lg:text-2xl font-bold opacity-90">
        <div className="flex flex-col gap-10  lg:flex-row lg:justify-between">
          <div className="flex flex-col  lg:w-[40%] ">
            <p className="text-4xl lg:text-5xl pb-10">Platform Fee:</p>
            <div className="flex">
              <p className="w-20  text-3xl text-right leading-4 pr-2">•</p> Less
              than 20 Bookings Weekly: Rs 99 platform fee per week for hosts
              with fewer than 20 bookings.
            </div>
            <div className="flex">
              <p className="w-20  text-3xl text-right leading-4 pr-2">•</p> 20
              or More Bookings Weekly: No platform fee charged for hosts with 20
              or more bookings.
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:w-[40%] ">
            <p className="text-4xl lg:text-5xl">Commission:</p>
            <div className="flex">
              <p className="w-40 lg:w-20  text-3xl text-right leading-4 pr-2">•</p> We
              charge a flat commission rate of 3.99% for each ticket sold. This
              commission helps us maintain and improve our platform to provide
              you with the best possible experience.
            </div>
          </div>
        </div>
        <p className="lg:text-lg lg:text-center ">
          *Unlike other platforms, we don't believe in surprises. There are no
          hidden fees or extra charges.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
