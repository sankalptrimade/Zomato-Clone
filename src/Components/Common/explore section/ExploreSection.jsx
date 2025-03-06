import React from "react";
import "./ExploreSection.css";
import ExploreCard from "./explore card/ExploreCard";

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurants) => {
          return <ExploreCard restaurants={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
