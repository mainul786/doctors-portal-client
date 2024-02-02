import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {tretment, apponmentDate, price, slot } = booking;
    return (
        <div>
            <h2 className='text-3xl'>Payment for {tretment}</h2>
            <p className='text-xl'>Please pay $ <strong>{price}</strong> for your appoinment of {apponmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;