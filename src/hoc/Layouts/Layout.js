import React from "react";
import Auxiliry from "../Auxilary/Auxilary";
import BurgerBuilder from "../../containers/burgerBuilder/BurgerBuilder";

import classes from "./Layout.module.css";
import logo from "../../assets/images/logo.png";

const layout = (props) => {
  return (
    <Auxiliry>
      <div className={classes.NavBar}>
        <img className={classes.NavBarLogo} src={logo} alt="logo" />
        <ul className={classes.NavMenu}>
          <li className={classes.NavItem + " " + classes.NavItemActive}>
            <a href="/" className={classes.NavLink}>
              Order Summary
            </a>
          </li>
          <li className={classes.NavItem}>
            <a href="/" className={classes.NavLink}>
              Checkout
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.BodyContainer}>
        <BurgerBuilder>{props.children}</BurgerBuilder>
      </div>
    </Auxiliry>
  );
};

export default layout;
