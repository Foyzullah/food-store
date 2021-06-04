import React from "react";
import Header from "./Header";

const MainPage = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default MainPage;
