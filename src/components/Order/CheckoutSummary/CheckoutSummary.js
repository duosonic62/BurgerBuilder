import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    // let burger = <Spinner />;
    // if (props.ingredients) {
    //     burger = <Burger ingredients={props.ingredients}/>;
    // }

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tasts well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
                {/* {burger} */}
            </div>
            <Button 
                btnType="Danger"
                clicked={props.onCheckoutCanceled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.onCheckoutContinue}>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;