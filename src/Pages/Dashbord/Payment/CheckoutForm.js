import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';



const CheckoutForm = ({booking}) => {
  const [paymentError, setPaymentError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price, email, paitentName, _id} = booking;

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
        authorization:`bearer ${localStorage.getItem('accessToken')}`
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
      return;
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

setSuccess('');
setProcessing(true);
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
    console.log(paitentName, email)
    if(confirmError){
      setPaymentError(confirmError.message);
      return;
    }
    console.log('paymentintent', paymentIntent);
    if(paymentIntent.status === "succeeded"){
      

      const payments = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id
      }

      fetch(`http://localhost:5000/payments`,{
        method:'POST',
        headers:{
          'content-type':'application/json',
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(payments)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          setSuccess('Congrate! your payment complated!');
          setTransactionId(paymentIntent.id);
        }
      })

    }
    setProcessing(false)
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
         className="mt-6"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{paymentError}</p>
      {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;