import React from "react";
import classes from "./BurgerIngrediantActionControl.module.css";

const burgerIngrediantActionControl = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <button
          className={"btn btn-primary mr-1 " + classes.BtnBurgerIngrediants}
          onClick={props.viewOrderSummary}
        >
          Order Summary
        </button>
        <button
          className={"btn btn-primary " + classes.BtnBurgerIngrediants}
          onClick={props.checkoutOrder}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default burgerIngrediantActionControl;
