import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes great!</h1>
            <div style={{ width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
             btnType='Success'
             clicked={props.checkoutContinue}>
                PROCEED
            </Button>
            <Button
             btnType='Danger'
             clicked={props.checkoutCancel}>
                CANCEL
            </Button>
        </div>
    );
}

export default checkoutSummary;