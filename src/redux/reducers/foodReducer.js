import allFoods from "../../fakeData/fakeData.json";
const initialState = {
  orderList: [],
  foodList: allFoods,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const newState = {
        ...state,
        orderList: [...state.orderList, action.payload],
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default foodReducer;
