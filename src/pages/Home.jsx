import React from "react";
import { Link } from "react-router-dom";
import { Crown, Headset, Star } from "@phosphor-icons/react";

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-20 text-center lg:pt-32 lg:pb-32">
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
        <div className="flex justify-center gap-2 mt-6">
          <Link
            to="/#BuyCards"
            title="Buy Pokemon cards"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            Buy Cards
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

      {/* About us */}

      <div className="bg-[#fef5e9] w-full">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-20 text-center lg:pt-32 lg:pb-32">
          <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            The Day Empire
          </span>
          <h2 className="mx-auto max-w-4xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl">
            Grow your collection with trust and confidence
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Our expert team meticulously verifies each card to ensure genuine
            collectibles, offering you only the best in the market. Experience
            top-tier customer support and a seamless shopping experience, making
            us your trusted partner in building a prestigious collection.
          </p>
          <div className="flex justify-center mt-6">
            <Link
              to="/about-us"
              title="Learn About Day Empire"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black rounded-lg hover:bg-gray-700 text-white"
            >
              Get to know us more
            </Link>
          </div>
        </div>
      </div>

      {/* Collection */}

      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-20 text-center lg:pt-32 lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Our Collection
        </span>
        <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl">
          Start building your perfect collection today
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          Start building your collection today with our extensive selection of
          premium trading cards, coins, and dice. Whether you're a seasoned
          collector or just beginning your journey, our curated inventory has
          something for everyone. If you know what you're looking for, try using
          our search tool to find it quickly and easily.
        </p>
        <div className="flex justify-center gap-2 mt-6">
          <a
            href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire"
            title="See Day Empire Full Collection"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            Full Collection
          </a>

          <Link
            to="/#BuyCards"
            title="Search Day Empire Collection"
            className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-3 relative bg-white rounded-lg text-black hover:text-gray-500"
          >
            Search Collection
          </Link>
        </div>
      </div>

      {/* Collection cards */}

      <div className="mx-auto max-w-7xl text-center px-8 sm:px-6 mb-20">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4">
          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon"
            target="_blank"
            title="Pokemon Cards"
            className="inline-block mb-10 sm:mb-0"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-gengar-coin.png"
                alt="Buy Pokémon™ Coins"
                class="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Cards</h2>
              <p className="mb-4 px-4">
                {" "}
                Build competitive decks with rare, holographic, and high-value
                trading cards featuring dynamic artwork and strategic abilities.
              </p>
              <button className="bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Shop Now
              </button>
            </div>
          </a>

          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon+coin"
            target="_blank"
            className="inline-block mb-10 sm:mb-0"
            title="Pokemon Coins"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-charizard-coin.png"
                alt="Buy Pokémon™ Coins"
                className="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Coins</h2>
              <p className="mb-4 px-4">
                Precision-crafted for gameplay mechanics, these collectible
                coins enhance battle decisions and add aesthetic appeal.
              </p>
              <button className="bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Upgrade Your Game
              </button>
            </div>
          </a>

          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon+dice"
            title="Pokemon Dice"
            target="_blank"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-dice.png"
                alt="Buy Pokémon™ Dice"
                className="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Dice</h2>
              <p className="mb-4 px-4">
                Essential for tracking damage and game statistics, these
                high-quality dice ensure accuracy in every match.
              </p>
              <button className="bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Get Yours Today
              </button>
            </div>
          </a>
        </div>
      </div>

      {/* Card Search*/}

      {/* Benefits*/}

      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-10 text-center lg:pt-16 lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Benefits with Day Empire
        </span>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold font-display tracking-tight text-black sm:text-5xl">
          Building trust, one card at a time
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          At Day Empires, we pride ourselves on expert knowledge, certified
          authenticity, innovative technology, and customer-centric service. Our
          team lives and breathes Pokémon™, staying ahead of the latest trends
          and market insights to bring you the best.
        </p>
      </div>
      <div className="mx-auto max-w-7xl text-center px-8 sm:px-6 mb-20">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Crown color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l sm:text-2xl font-bold mt-4 pb-2 px-4">
              Diverse selection of quality cards
            </h3>
          </div>
          <div>
            <Star color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l sm:text-2xl font-bold mt-4 pb-2 px-4">
              Quality service from shop to doorstep
            </h3>
          </div>
          <div>
            <Headset color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l sm:text-2xl font-bold mt-4 pb-2 px-4">
              Get exceptional customer service
            </h3>
          </div>
        </div>
      </div>

      {/* Testimonials*/}

      {/* Q&A*/}

      {/* Sell card 2 Col*/}
    </div>
  );
};

export default Home;
