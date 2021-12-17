import React from 'react';
import * as PropTypes from "prop-types";

const Order = (props) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.price}</li>
            <li>{props.isAvailable}</li>

        </ul>
    );
};

Order.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
}

export default Order;