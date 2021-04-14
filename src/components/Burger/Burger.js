import React from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import BurgerIngrediants from "./BurgerIngredients/BurgerIngredients";
import BurgerControls from "./BurgerControls/BurgerControls";
import BurgerOrderSummaryControl from "./BurgerControls/BurgerOrderSummaryControl/BurgerOrderSummaryControl";
import BurgerIngrediantActionControl from "../Burger/BurgerControls/BurgerIngrediantActionControl/BurgerIngrediantActionControl";

import classes from "./Burger.module.css";

const burger = (props) => {
  var burgerIngrideants = [];

  [...props.ingrediants].map((ingrideant) => {
    for (let i = 0; i < ingrideant.qty; i++) {
      burgerIngrideants.push(
        <BurgerIngrediants
          key={burgerIngrideants.length + 1}
          ingredientType={ingrideant.ingrediant}
        />
      );
    }
    return null;
  });

  return (
    <Auxilary>
      <div className={classes.Burger}>
        <BurgerIngrediants ingredientType="burger-top" />
        {burgerIngrideants.length !== 0 ? (
          burgerIngrideants
        ) : (
          <p className={classes.NoIngrediantsMessage}>
            Please add ingrediants!
          </p>
        )}
        <BurgerIngrediants ingredientType="burger-bottom" />
      </div>
      <div className={classes.Ingredients}>
        <BurgerControls
          ingrediants={props.ingrediants}
          addIngrediants={props.addIngrediants}
          removeIngrediants={props.removeIngrediants}
        />
      </div>
      <div className={classes.IngrediantsActionButton}>
        <BurgerIngrediantActionControl
          viewOrderSummary={props.viewOrderSummary}
          checkoutOrder={props.checkoutOrder}
        />
      </div>
      {props.orderSummaryVisible ? (
        <BurgerOrderSummaryControl
          basePrice={props.basePrice}
          ingrediants={props.ingrediants}
          checkoutOrder={props.checkoutOrder}
          closeOrderSummary={props.closeOrderSummary}
        />
      ) : null}
    </Auxilary>
  );
};

export default burger;
