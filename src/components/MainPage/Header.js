import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const Header = () => {
  return (
    <div className="heade-top">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="logo">
              <h3>
                Food <span>Store</span>
              </h3>
            </div>
          </div>
          <div className="col-8">
            <ul className="mainmenue">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
