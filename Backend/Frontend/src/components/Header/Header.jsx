import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your food here</h2>
        <p>
          Indulge in a curated selection of mouthwatering dishes, prepared with
          care using premium ingredients and a passion for flavor. Our goal is
          to bring comfort and joy to your table, delivering a memorable dining
          experience with every bite. Let us turn your cravings into a
          delightful culinary journey, made just for you.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
