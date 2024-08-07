import React from 'react';

const CustomerFeedbak = () => {
    const feedbacks = [
        { customer: 'Jenny Wilson', feedback: 'The food was excellent and so was the service.', rating: 5 },
        { customer: 'Dianne Russell', feedback: 'I enjoyed the Eggs Benedict served on homemade focaccia.', rating: 4 },
        // Add more feedback
    ];
    return (
        <div className="customer-feedback">
            <h3>Customer's Feedback</h3>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}>
                        <span>{feedback.customer}</span>
                        <span>{feedback.feedback}</span>
                        <span>{'⭐'.repeat(feedback.rating)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerFeedbak;