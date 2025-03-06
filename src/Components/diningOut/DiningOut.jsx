import React from 'react';
import "./DiningOut.css";
import Collection from '../Common/collection/Collection';
import Filter from "./../Common/filter/Filter";
import { IoFilter } from 'react-icons/io5';
import { diningRestaurants } from '../../data/diningData';
import ExploreSection from '../Common/explore section/ExploreSection';

const collectionList = [
  {
    id:1,
    title:"Top Trending Spots",
    cover: "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1721907131.png",
    places: "28 Places"
  },
  {
    id:2,
    title:"Newly Opened Places",
    cover: "https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171286.png",
    places: "36 Places"
  },
  {
    id:3,
    title:"Regional Flavours",
    cover: "https://b.zmtcdn.com/data/collections/c0659397d7fe2cb45d024d9375c2c5ea_1725362174.png",
    places: "32 Places"
  },
  {
    id:4,
    title:"Best Buffet In Town",
    cover: "https://b.zmtcdn.com/data/collections/4e41758598775d808a8e70d6654df929_1725604011.png",
    places: "12 Places"
  },
  {
    id:5,
    title:"Best Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1715844025.png",
    places: "29 Places"
  },
  {
    id:6,
    title:"Best Insta-worthy Places",
    cover: "https://b.zmtcdn.com/data/collections/a5e6d123ac773de6d33250da4bb3b93f_1731309690.png",
    places: "18 Places"
  },
  {
    id:7,
    title:"Asian Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/dbfb118fb614c663b22373f49db73085_1729509155.png",
    places: "15 Places"
  },
  {
    id:8,
    title:"Best Pubs & Bars",
    cover: "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1728287908.jpg",
    places: "17 Places"
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <IoFilter className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Offers",
  },
  {
    id: 3,
    title: "Rating 4.5+",
  },
  {
    id: 4,
    title: "Pet Friendly",
  },
  {
    id: 5,
    title: "Outdoor Seating",
  },
  {
    id: 6,
    title: "Serves Alcohol",
  },
  {
    id: 7,
    title: "Open Now",
  },
];

const diningList = diningRestaurants;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
        <Filter filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Restaurants in Hyderabad"/>
    </div>
  )
}

export default DiningOut
