import React from "react";
import { useSelector } from "react-redux";
import Food from "../components/Food/Food";
import MainPage from "../components/MainPage/MainPage";

const Home = () => {
  const foods = useSelector((state) => {
    return state.foods.foodList;
  });
  return (
    <MainPage>
      {foods?.map((food) => (
        <Food key={food.id} food={food}></Food>
      ))}
    </MainPage>
  );
};

export default Home;
