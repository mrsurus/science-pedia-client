import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../../Context/AuthProvider'

const CheckOutForm = ({data}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const { name,price, _id} = data
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            setCardError(error.message)
            console.log(error);
        }
        else{
            setCardError('')
            console.log(paymentMethod);
        }
        setSuccess('')
        setProcessing(true)
        const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    }
                }
            }
        );
        if(confirmError){
            setCardError(confirmError.message)
            return;
        }
        else{
            console.log('paymentIntent', paymentIntent);
        }
        if (paymentIntent.status === 'succeeded') {
           
            //storing payment info
            const payment ={
                status: name,
                price,
                transactionId: paymentIntent.id,
                email: user?.email,
                OrderId: _id

            }
            fetch("http://localhost:5000/payments", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    setSuccess('Congrats! Your payment complete')
                    setTransactionId(paymentIntent.id)
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
                <button className='btn btn-sm btn-success mt-10'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <div className="text-green-400">{success}</div>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;