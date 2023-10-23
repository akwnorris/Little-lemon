import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/plating.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Welcome to Little Lemon!</h2>
          <p>
          Join us for a delightful experience, where we serve up deliciously simple cuisine and craft classic cocktails in a vibrant yet relaxed atmosphere. Our menu is a celebration of local flavors, and we're always thrilled to surprise you with our daily specials. Come on in and savor the warmth of our hospitality!
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
