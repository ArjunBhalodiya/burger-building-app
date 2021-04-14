import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngrediants.module.css";

const burgerIngredients = (props) => {
  switch (props.ingredientType) {
    case "burger-top":
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
    case "cheese":
      return <div className={classes.Cheese}></div>;
    case "salad":
      return <div className={classes.Salad}></div>;
    case "bacon":
      return <div className={classes.Bacon}></div>;
    case "meat":
      return <div className={classes.Meat}></div>;
    case "burger-bottom":
      return <div className={classes.BreadBottom}></div>;
    default:
      return null;
  }
};

burgerIngredients.propTypes = {
  ingredientType: PropTypes.string.isRequired
};

export default burgerIngredients;
