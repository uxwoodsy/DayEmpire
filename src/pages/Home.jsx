import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ"
import Benefits from "../components/Benefits"
import AboutUsHome from "../components/AboutUsHome"
import Collection from "../components/Collection"
import SellPanel from "../components/SellPanel"
import Testimonial from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-16 pb-16 text-center lg:pt-32 lg:pb-32">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Over 30,000 items for sale!
        </span>
        <h1 className="mx-auto max-w-5xl font-bold font-display text-5xl tracking-tight text-black sm:text-7xl">
          Elevate your Pokémon™ collection to the next level
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          Specialists in Pokémon™ Trading cards, powered by Technology. You can
          trust Day Empire for delivering authenticity and excellence.
        </p>
        <div className="sm:flex justify-center gap-2 mt-6">
          <Link
            to="/#BuyCards"
            title="Buy Pokemon cards"
            className="mb-2 sm:mb-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            Buy Pokemon Cards
          </Link>

          <Link
            to="/about-us"
            title="Buy Pokemon cards"
            className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-3 relative bg-white rounded-lg text-black hover:text-gray-500"
          >
            Learn more
          </Link>
        </div>
      </div>

      <AboutUsHome/>
    ` <Collection/>
      <Benefits/>
      <FAQ/>
      <Testimonial/>
      <SellPanel/>
    </div>
  );
};

export default Home;
