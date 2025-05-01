import React from "react";

const SellPanel = () => {
  return (
    <>
       <div className="bg-[#fef5e9] w-full">

      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8 gap-16 sm:px-6 lg:px-8 pt-16 pb-16 mb-16 lg:pt-32 lg:pb-32 lg:mb-16">

       <img src="/pokemon-collection.png" alt="Sell unwanted Pokemon Cards with Day Emmpire" class="w-full md:w-1/2 rounded-lg"/>
       <div class="w-full md:w-1/2">
       <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            Sell unwanted cards
          </span>
          <h2 className="max-w-4xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl">
            Clear the decks with our expert assistance!
          </h2>
          <p className="mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          We're always on the lookout to buy bulk Pokémon™ cards but do not commit to a bulk price. We instead will need to see a few photographs of the cards in full and can work with you locally to collect and appraise the value of the stock.
          </p>
          <div className="flex mt-6">
            <a
              href="#SellCards"
              title="Sell unwanted cards with Day Empire"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black rounded-lg hover:bg-gray-700 text-white"
            >
              Get in touch</a>
          </div>
       </div>
      </div>
      </div>
    </>
  );
};

export default SellPanel;
