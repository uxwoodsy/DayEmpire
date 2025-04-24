import React from "react";

const Certfication = () => {
  return (
    <>
      <div className="mx-4 sm:mx-16 mb-10 sm:mb-16 font-bold">
        <h2 className="flex mx-auto font-bold justify-center mb-8">
          Certified Partners & Featured Brands
        </h2>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-12 items-center justify-center">
          <li>
            <img
              src="/card-market.png"
              role="img"
              aria-label="Certifed with Cardmarket"
              height={140}
              alt="Certifed with Cardmarket - DayEmpire"
            />
          </li>
          <li>
            <img
              src="/pokemon-trading.png"
              height={140}
              role="img"
              aria-label="Pokemon Trading Cards"
              alt="Pokemon Trading Cards"
            />
          </li>
          <li>
            <img
              src="/amazon-startup.png"
              height={140}
              role="img"
              aria-label="Backed by AWS Startup"
              alt="image shows we are backed by AWS Startup"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Certfication;
