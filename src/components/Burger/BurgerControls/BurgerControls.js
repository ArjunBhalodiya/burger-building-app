import React from "react";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import BurgerIngrediantsControl from "./BurgerIngrediantControl/BurgerIngrediantControl";

import classes from "./BurgerControls.module.css";

const burgerControls = (props) => {
  let ingrediants = [];

  [...props.ingrediants].map((item) => {
    ingrediants.push(
      <BurgerIngrediantsControl
        key={item.ingrediant}
        ingrediant={item.ingrediant}
        qty={item.qty}
        addIngrediants={() => props.addIngrediants(item)}
        removeIngrediants={() => props.removeIngrediants(item)}
      />
    );
    return null;
  });

  return (
    <Auxilary>
      <div className={classes.Ingredient + " row"}>
        <div className="col-12 text-center">
          <strong>Choose your fevourite ingredients</strong>
        </div>
      </div>
      <div className={classes.Ingredient + " row"}>
        <div className="col-8">
          <strong>Ingredients</strong>
        </div>
        <div className="col-4">
          <strong>Qty.</strong>
        </div>
      </div>
      {ingrediants}
    </Auxilary>
  );
};

export default burgerControls;
