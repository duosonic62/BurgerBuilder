import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const checkout = (props) => {

    const [ingredients, setIngredients] = useState({ingredients: null});
    const [totalPrice, setTotalPrice] = useState(0);

    // useEffect(() => {
    //     const query = new URLSearchParams(props.location.search);
    //     const tmpIngredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') { 
    //             price = param[1];
    //         } else {
    //             tmpIngredients[param[0]] = +param[1];
    //         }
    //     }
    //     setIngredients(tmpIngredients);
    //     setTotalPrice(price);
    //     console.log('useEffect');
    // }, ingredients);

    const checkoutCanceledHandller = () => {
        props.history.goBack();
    };

    const checkoutContinueHandller = () => {
        props.history.replace('/checkout/contact-data');
    };

    console.log(ingredients);

    return (
        <div>
            <CheckoutSummary
                ingredients={props.ings}
                onCheckoutCanceled={checkoutCanceledHandller}
                onCheckoutContinue={checkoutContinueHandller} />
            <Route 
                path={props.match.path + '/contact-data'} 
                component={ContactData}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(checkout);