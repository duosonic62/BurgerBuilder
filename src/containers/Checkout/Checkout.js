import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const checkout = (props) => {

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

    let summary = <Redirect to="/" />;
    if (props.ings) {
        const purchaseRedirect = props.purchased ? <Redirect to="/" /> : null;
        summary = (
            <div>
                {purchaseRedirect}
                <CheckoutSummary
                    ingredients={props.ings}
                    onCheckoutCanceled={checkoutCanceledHandller}
                    onCheckoutContinue={checkoutContinueHandller} />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }

    return <div>{summary}</div>;
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(checkout);