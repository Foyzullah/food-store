import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Food from "../components/Food/Food";
import MainPage from "../components/MainPage/MainPage";

const Order = () => {
  const foods = useSelector((state) => {
    return state.foods.orderList;
  });
  return (
    <MainPage>
      {foods?.length ? (
        foods.map((food) => <Food key={food.id} food={food}></Food>)
      ) : (
        <p>
          You have no order <Link to="/">Home</Link>
        </p>
      )}
    </MainPage>
  );
};

export default Order;
