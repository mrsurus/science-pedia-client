import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const PremiumModal = ({premiumdata}) => {
    const { price, name, benefits } = premiumdata

    const stripePromise = loadStripe(process.env.REACT_APP_stripe_secret)
    return (
        <>
            <input type="checkbox" id="premium-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="premium-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Pay to be the {name} user of our Website</h3>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm data={premiumdata}></CheckOutForm>
                    </Elements>
                    </div>
            </div>
        </>
    );
};

export default PremiumModal;