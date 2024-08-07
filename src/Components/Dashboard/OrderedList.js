import React from 'react';

const OrderedList = () => {
    const orders = [
        { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48957628', amount: '$385.02', status: 'Pending' },
        // Add more orders
    ];
    return (
        <div className="orders-list">
            <h3>Recent Orders</h3>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <span>{order.customer}</span>
                        <span>{order.orderNo}</span>
                        <span>{order.amount}</span>
                        <span>{order.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderedList;