import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    meat: 80,
    salad: 30,
    cheese: 55,
    bacon: 75.5
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        },
        totalAmt: 50,
        canPurchase: false,
        checkOut: false
    }

    addIngredientHandler = type => {
        const newCount = this.state.ingredients[type] + 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const newAmt = this.state.totalAmt + INGREDIENT_PRICES[type];

        this.setState({totalAmt: newAmt, ingredients: newIngredients});
        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type] > 0){
            const newCount = this.state.ingredients[type] - 1;
            const newIngredients = {...this.state.ingredients};
            newIngredients[type] = newCount;
            const newAmt = this.state.totalAmt - INGREDIENT_PRICES[type];

            this.setState({totalAmt: newAmt, ingredients: newIngredients});
            this.updatePurchaseState(newIngredients);
        }
    }

    updatePurchaseState (ingredients) {
        const sum = Object.values(ingredients)
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        // console.log(sum);
        this.setState({canPurchase: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({checkOut: true});
    }

    purchaseCancelHandler = () => {
        this.setState({checkOut: false});
    }

    purchaseContinueHandler = () => {
        alert("Um...you can, but this feature isn't added yet");
    }

    render(){
        const disableInfo = {...this.state.ingredients};
        for(let i in disableInfo)
            disableInfo[i] = disableInfo[i] <= 0;
        return (
            <Aux>
                <Modal show={this.state.checkOut} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                     ingredients={this.state.ingredients}
                     canceled={this.purchaseCancelHandler}
                     continue={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 disabled={disableInfo}
                 IngreAdded={this.addIngredientHandler}
                 IngreRemoved={this.removeIngredientHandler}
                 amount={this.state.totalAmt}
                 canBuy={this.state.canPurchase}
                 ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;