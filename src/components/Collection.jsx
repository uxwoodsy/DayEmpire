import React from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <>

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

      <div className="mx-auto max-w-7xl text-center px-8 sm:px-6 mb-20 lg:mb-32">
        <div className="sm:grid sm:grid-cols-3 sm:gap-6">
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
              <p className="mb-4 px-6">
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
              <p className="mb-4 px-6">
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
              <p className="mb-4 px-6">
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
    </>
  );
};

export default Collection;
