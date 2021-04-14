import React from "react";
import Backdrop from "../../../UI/Backdrop";
import classes from "./BurgerOrderSummaryControl.module.css";

const burgerOrderSummaryControl = (props) => {
  let ingrediants = [];
  let total = props.basePrice;

  ingrediants.push(
    <div key="Burger" className={"row " + classes.Ingredient}>
      <div className="col-6">Bread</div>
      <div className="col-3">1</div>
      <div className="col-3">{props.basePrice.toFixed(2)}$</div>
    </div>
  );

  [...props.ingrediants].forEach((ingrediant) => {
    total += ingrediant.qty * ingrediant.price;
    if (ingrediant.qty > 0) {
      ingrediants.push(
        <div
          key={ingrediant.ingrediant}
          className={"row " + classes.Ingredient}
        >
          <div className="col-6">{ingrediant.ingrediant}</div>
          <div className="col-3">{ingrediant.qty}</div>
          <div className="col-3">
            {(ingrediant.price * ingrediant.qty).toFixed(2)}$
          </div>
        </div>
      );
    }
  });

  return (
    <Backdrop>
      <div className={classes.IngrediantSummaryModal}>
        <div className={"row " + classes.Ingredient}>
          <div className="col-12 text-center">
            <strong>Order Summary</strong>
          </div>
        </div>
        <div className={"row " + classes.Ingredient}>
          <div className="col-6">
            <strong>Ingredients</strong>
          </div>
          <div className="col-3">
            <strong>Qty.</strong>
          </div>
          <div className="col-3">
            <strong>Price</strong>
          </div>
        </div>
        {ingrediants}
        <div className={"row " + classes.Ingredient}>
          <div className="col-6">
            <strong>Total:</strong>
          </div>
          <div className="col-3">
            <strong></strong>
          </div>
          <div className="col-3">
            <strong>{total.toFixed(2)}$</strong>
          </div>
        </div>
        <div className={"row " + classes.Ingredient}>
          <div className="col-12">
            <button
              className={"btn btn-primary " + classes.BtnBurgerIngrediants}
              onClick={props.checkoutOrder}
            >
              Checkout
            </button>
            <button
              className={"btn btn-primary " + classes.BtnBurgerIngrediants}
              onClick={props.closeOrderSummary}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default burgerOrderSummaryControl;
