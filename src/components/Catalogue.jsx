import React from 'react';
import './Catalogue.css';
import ProductGrid from './ProductGrid';
import HandpickSection from './HandpickSection';

function Parent() {
  return (
    <>
      <main>
        <div className="wallpaper">
          <img className="backgroundWallpaper" src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
        </div>

        <div className="productSectionA">
          <ProductGrid title="Gaming accessories" items={gamingAccessories} />
          <ProductGrid title="Deals in PCs" items={dealsInPCs} />
          <ProductGrid title="Amazon Gadget Store" items={amazonGadgetStore} />
          <HandpickSection title="Handpicked music & audio" items={handpickedMusicAudio} />
          <ProductGrid title="Shop deals in Fashion" items={fashionDeals} />
          <ProductGrid title="Fill your Easter basket with joy" items={easterBasket} />
          <ProductGrid title="Toys under $25" items={toysUnder25} />
          <ProductGrid title="Top Deal" items={topDeal} />
        </div>

        <div className="landscapeA">
          <div className="headlineA">
            <h3>Best Sellers in Sport & Outdoors</h3>
          </div>
          <div className="landA">
            {bestSellersInSportOutdoors.map((item, index) => (
              <a href="#" key={index}>
                <img className="books" src={item.image} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="landscapeB">
          <div className="headlineA">
            <h3>Best Sellers in Beauty & Personal Care</h3>
          </div>
          <div className="landA">
            {bestSellersInBeautyPersonalCare.map((item, index) => (
              <a href="#" key={index}>
                <img src={item.image} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="productSectionB">
          <ProductGrid title="Shop activity trackers and smartwatches" items={activityTrackers} />
          <ProductGrid title="Gaming merchandise" items={gamingMerchandise} />
        </div>
      </main>
    </>
  );
}

const gamingAccessories = [
  // Add your gaming accessories items here
];

const dealsInPCs = [
  // Add your deals in PCs items here
];

const amazonGadgetStore = [
  // Add your Amazon Gadget Store items here
];

const handpickedMusicAudio = [
  // Add your handpicked music & audio items here
];

const fashionDeals = [
  // Add your fashion deals items here
];

const easterBasket = [
  // Add your Easter basket items here
];

const toysUnder25 = [
  // Add your toys under $25 items here
];

const topDeal = [
  // Add your top deal items here
];

const bestSellersInSportOutdoors = [
  // Add your best sellers in sport & outdoors items here
];

const bestSellersInBeautyPersonalCare = [
  // Add your best sellers in beauty & personal care items here
];

const activityTrackers = [
  // Add your activity trackers items here
];

const gamingMerchandise = [
  // Add your gaming merchandise items here
];

export default Parent;
