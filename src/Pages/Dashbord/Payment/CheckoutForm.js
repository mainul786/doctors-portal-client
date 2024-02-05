import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
  const [paymentError, setPaymentError] = useState('');
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price, email, paitentName} = booking;

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
        autherization:`bearer ${localStorage.getItem('accessToken')}`
        },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data)
        setClientSecret(data.clientSecret)
      });
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setPaymentError(error.message);
      return;
    }
    else {
      setPaymentError('');
    }


    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: paitentName,
            email: email
          },
        },
      },
    );
    if(confirmError){
      setPaymentError(confirmError.message);
      return;
    }
    console.log('paymentintent', paymentIntent);

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
         className="mt-6 btn btn-primary" 
         type="submit"
          disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{paymentError}</p>
    </>
  );
};

export default CheckoutForm;