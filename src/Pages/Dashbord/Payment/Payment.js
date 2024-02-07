import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from './../../Shared/Loading/Loading';







const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    console.log(booking)
    const { tretment, apponmentDate, price, slot } = booking;
    return (
        <div>
            <h2 className='text-3xl'>Payment for {tretment}</h2>
            <p className='text-xl'>Please pay $ <strong>{price}</strong> for your appoinment of {apponmentDate} at {slot}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;