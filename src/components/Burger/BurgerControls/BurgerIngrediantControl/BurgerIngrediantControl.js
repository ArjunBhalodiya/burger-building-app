import React from "react";

import classes from "./BurgerIngrediantControl.module.css";

const burgerIngrediantsControl = (props) => {
  return (
    <div className={"row " + classes.Ingredient}>
      <div className="col-8 text-capitalize">{props.ingrediant}</div>
      <div className="col-4">
        <button className={classes.BtnAddIngredient + " btn btn-sm"} onClick={props.addIngrediants}>
          <strong>+</strong>
        </button>
        {props.qty}
        <button className={classes.BtnRemoveIngredient + " btn btn-sm"} onClick={props.removeIngrediants}>
          <strong>-</strong>
        </button>
      </div>
    </div>
  );
};

export default burgerIngrediantsControl;
