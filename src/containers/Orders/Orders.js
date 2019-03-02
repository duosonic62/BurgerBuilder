import React, { useEffect, useState } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandller from '../../hoc/withErrorHandler/withErrorHandler';

const orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                setOrders(fetchedOrders);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
    }, setOrders);

    return(
        <div>
            {orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))}
        </div>
    );
};

export default withErrorHandller(orders, axios);
