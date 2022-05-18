import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={12321341}
          title="THE lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={402}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id={123213}
          title='Samsung Galaxy Book2 Pro 360 Intel 12th Gen i5 EvoTM&nbsp; 33.78 cm (13.3") Touchscreen 2-in-1 AMOLED Thin &amp; Light...'
          price={115990}
          rating={5}
          image="https://m.media-amazon.com/images/I/61WljCnbnrL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={987654}
          title="MYFITNESS Chocolate Peanut Butter Crunchy 1250g"
          price={595}
          rating={5}
          image="https://m.media-amazon.com/images/I/51MrKVHPCIS.jpg"
        />
        <Product
          id={456789}
          title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD (Black)"
          price={11899}
          rating={5}
          image="https://m.media-amazon.com/images/I/71nplbAMwzL._SX425_.jpg"
        />
        <Product
          id={123456}
          title="Noise ColorFit Pulse Spo2 Smart Watch 10 days battery 24*7 Heart Rate  IP68 Waterproof (Jet Black)"
          price={1999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41XH-IpxCQL._AC_SR400,600_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={4245634}
          title="Sansui 80cm (32 inches) HD Ready Certified Android LED TV JSW32ASHD (Midnight Black) (2021 Model) | With Android 11"
          price={15400}
          rating={4}
          image="https://m.media-amazon.com/images/I/81dftcOAqDL._SX450_.jpg"
        />
        <Product
          id={11113431}
          title="Sansui 80cm (32 inches) HD Ready Smart LED TV JSY32SKHD (BLACK) (2021 Model) | With Bezel-less Design"
          price={15900}
          rating={4}
          image="https://m.media-amazon.com/images/I/719WthOLZPL._SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={565455}
          title="Amazon Brand - Solimo Medusa Engineered Wood Wardrobe walnut finish ,3 Doors"
          price={12999}
          rating={5}
          image="https://m.media-amazon.com/images/I/813bIeFxnQL._AC_UL320_.jpg"
        />
        <Product
          id={787878}
          title="Vega Off Road D/V Dull Black Helmet-L"
          price={1526.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61+ZHaT0k3S._SX355_.jpg"
        />
        <Product
          id={898989}
          title="Apple iPhone 13 Pro (256GB) - Silver"
          price={129900}
          rating={4}
          image="https://m.media-amazon.com/images/I/617FFRO3vcL._SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={131313}
          title="Apple EarPods with Lightning Connector"
          price={1679}
          rating={5}
          image="https://m.media-amazon.com/images/I/41GGrO0Y61L._SX522_.jpg"
        />
        <Product
          id={787878}
          title="Apple Watch Series&nbsp;7 (GPS, 45mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular"
          price={44990}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Tlukf9FTL._SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

// src="https://androidpctv.com/wp-content/uploads/2020/07/amazon-prime-video-4K.jpg"
// src="https://mspoweruser.com/wp-content/uploads/2020/06/amazon-prime-video-1.jpg"
