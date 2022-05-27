import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Lodding from '../Shared/Lodding';
import CardPay from './CardPay';

const stripePromise = loadStripe('pk_test_51L46RRLMrrzXTAUdnvQ5rVuM7RNjEmgRlDQvsXqkGlBnxZjGTStLg4UHjSFedghrlEpIGwUfGmTqOa9t2zdwGpMb008yezK4ky');

const Payment = () => {
    const { payId } = useParams();
    const url = `https://infinite-castle-74205.herokuapp.com/purchase/${payId}`;
    const { data: booking, isLoading } = useQuery(['booking', payId], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Lodding />
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-gray-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-red-500">Hello, {booking.displayName}</p>
                    <h2 class="card-title">Pay For: {booking.name}</h2>
                    <p>Please pay: {booking.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-gray-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CardPay booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;