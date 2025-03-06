import React from "react";
import "./Delivery.css";
import Filter from "../Common/filter/Filter";
import { IoFilter } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import DeliveryCollections from "./delivery collections/DeliveryCollections";
import TopBrands from "./top brands/TopBrands";
import ExploreSection from "../Common/explore section/ExploreSection";
import { restaurants } from "../../data/restaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <IoFilter className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <HiArrowsUpDown className="absolute-center" />,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list = {restaurantList} collectionName="Delivery Restaurants in Hyderabad"/>
    </div>
  );
};

export default Delivery;
