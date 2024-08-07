import React from 'react';
import Headers from '../Dashboard/Headers';
import States from '../Dashboard/States';
import ActivityChart from '../Dashboard/ActivityChart';
import OrderedList from '../Dashboard/OrderedList';
import CustomerFeedbak from '../Dashboard/CustomerFeedbak';
import Goals from '../Dashboard/Goals';

const MainContent = () => {
    return (
        <div>
            <main className="main-content">
             <Headers/>
             <States/>
             <ActivityChart/>
            <OrderedList/>
            <CustomerFeedbak/>
            <Goals/>
            
        </main>
        </div>
    );
};

export default MainContent;