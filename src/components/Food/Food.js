import React from "react";
import { useDispatch } from "react-redux";
import { addToOrderList } from "../../redux/actions/foodActions";
import "../MainPage/MainPage.css";

const Food = (props) => {
  const { title, imageUrl, price, description } = props.food;
  const dispatch = useDispatch();

  return (
    <div className="col-md-4">
      <div className="single-food-item">
        <div className="foodImg">
          <img src={imageUrl} alt="" />
        </div>
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <div className="card-bottom">
          <p className="price">${price}</p>
          <button
            onClick={() => dispatch(addToOrderList(props.food))}
            className="btn btn-primary"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
