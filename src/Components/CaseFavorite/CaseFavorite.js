import React from "react";
import { assets } from"../../Assets/Assets"

import "./CaseFavorite.css";


const CaseFavorite = () => {
  return (
    <div className="action-launcher">
      <div className="head-con">
        <img src={assets.pin} alt="pin-img" />
        <h1 className="heading">Case Favorite</h1>
      </div>

      <hr className="hrline" />
      <div className="down-con">
        <div className="search-input">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
        </div>
        <div className="search-input">
          <img src={assets.imageIcon} alt="imageIcon" className="image-image" />
          <p>Photo</p>
        </div>
        <div className="search-input">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
        </div>
      </div>
    </div>
  );
};

export default CaseFavorite;