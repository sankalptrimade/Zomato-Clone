import React from "react";
import "./collection.css";
import { FaCaretRight } from "react-icons/fa";
import Slider from "react-slick";
import NextArrow from "../../Common/carousel/NextArrow";
import PrevArrow from "../../Common/carousel/PrevArrow";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Hyderabad, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Hyderabad</div>
            <FaCaretRight className="absolute-center" style={{fontSize: "18px"}}/>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div key={item.id || item.title}>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                  <FaCaretRight className="absolute-center" style={{fontSize: "18px"}}/>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
