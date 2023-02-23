import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon"
      />
      <div className="home__row">
        <Product
          id="12121212"
          title="Macbook pro"
          price={600}
          rating={5}
          image="https://media.ldlc.com/r1600/ld/products/00/05/83/71/LD0005837183_1_0005837188_0005841945.jpg"
        />

        <Product
          id="12121212"
          title="Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone - Space Gray"
          price={475}
          rating={5}
          image="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1638601&recipeId=729"
        />
      </div>

      <div className="home__row">
        <Product
          id="ssdsd58710"
          title="
                     Maybelline Super Stay Vinyl Ink Longwear No-Budge Liquid Lipcolor, Highly Pigmented Color and Instant Shine, Peachy, Peachy Nude Lipstick, 0.14 fl oz, 1 Count"
          price={15}
          rating={3}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71EaWxjM4qL._SL1500_.jpg"
        />

        <Product
          id="1nad212"
          title="Ralph - Ralph Lauren | Sephora"
          price={80}
          rating={5}
          image="https://www.sephora.com/productimages/sku/s463398-main-zoom.jpg"
        />

        <Product
          id="naase12"
          title="olgate Max Fresh with Whitening Toothpaste with Mini Breath Strips, Cool Mint Toothpaste for Bad Breath, 6.3 Oz Tube. 3 Pack"
          price={4}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81uHThyd0HL._SX425_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12morre"
          title="Meta Quest Pro"
          price={989}
          rating={5}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520136_rd.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
