import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    basePrice: 5,
    ingrediants: [
      { ingrediant: "cheese", qty: 0, price: 0.5 },
      { ingrediant: "salad", qty: 0, price: 0.5 },
      { ingrediant: "bacon", qty: 0, price: 0.8 },
      { ingrediant: "meat", qty: 0, price: 1.0 },
    ],
    totalPrice: 5,
    orderSummaryVisible: false,
  };

  addIngrediants = (item) => {
    let ingrediants = [...this.state.ingrediants];

    ingrediants.map((ingrediant) => {
      if (ingrediant.ingrediant === item.ingrediant) {
        ingrediant.qty = ingrediant.qty + 1;
        return ingrediant;
      }
      return ingrediant;
    });

    const totalPrice = this.reCalcPrice(ingrediants);
    this.setState({ ingrediants: ingrediants, totalPrice: totalPrice });
  };

  removeIngrediants = (item) => {
    let ingrediants = [...this.state.ingrediants];
    ingrediants.map((ingrediant) => {
      if (ingrediant.qty > 0 && ingrediant.ingrediant === item.ingrediant) {
        ingrediant.qty = ingrediant.qty - 1;
        return ingrediant;
      }
      return ingrediant;
    });

    const totalPrice = this.reCalcPrice(ingrediants);
    this.setState({ ingrediants: ingrediants, totalPrice: totalPrice });
  };

  viewOrderSummary = () => {
    this.setState({ orderSummaryVisible: true });
  };

  closeOrderSummary = () => {
    this.setState({ orderSummaryVisible: false });
  };

  checkoutOrder = () => {
    window.alert(`Order places successfully.\nTotal price:${this.state.totalPrice.toFixed(2)}`);
  };

  reCalcPrice = (ingrediants) => {
    let totalPrice = this.state.basePrice;

    ingrediants.forEach((ingrediant) => {
      totalPrice += ingrediant.qty * ingrediant.price;
    });

    return totalPrice;
  };

  render() {
    return (
      <div>
        <Burger
          basePrice={this.state.basePrice}
          ingrediants={this.state.ingrediants}
          orderSummaryVisible={this.state.orderSummaryVisible}
          addIngrediants={this.addIngrediants}
          removeIngrediants={this.removeIngrediants}
          viewOrderSummary={this.viewOrderSummary}
          checkoutOrder={this.checkoutOrder}
          closeOrderSummary={this.closeOrderSummary}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
