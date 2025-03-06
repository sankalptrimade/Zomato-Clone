import React from "react";
import "./TopBrands.css";
import NextArrow from "../../Common/carousel/NextArrow";
import PrevArrow from "../../Common/carousel/PrevArrow";
import Slider from "react-slick";

const topBrands = [
  {
    id: 1,
    time: "34 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png",
  },
  {
    id: 2,
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f0751237a0f648cf23571ee0909add421726051487.png",
  },
  {
    id: 3,
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d48b21eea54ece0505a506cce1fd30331726048934.png",
  },
  {
    id: 4,
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png",
  },
  {
    id: 5,
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png",
  },
  {
    id: 6,
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png",
  },
  {
    id: 7,
    time: "17 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/8c0e702a0831f5a8b108cd7edbc48d67_1728976747.png",
  },
  {
    id: 8,
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png",
  },
  {
    id: 9,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png",
  },
  {
    id: 10,
    time: "34 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
  },
];

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrands.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img src={brand.cover} alt={brand.time} className="top-brands-image"/>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
