import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    'pk_test_51Hc5IgDYtTiUjYXagGlJ3XYqOjVQA9egdYtmA5IOYRnO5vcGTpLMubKQ4V4e3YWNzedCDBbfN2XbLukO4M80dAPP00t0LKdxLz';

  const onToken = (token) => {
    axios({
      url: 'purchase',
      method: 'POST',
      data: {
        amount: stripePrice,
        token
      }
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((err) => {
        console.log('Error: ', JSON.parse(err));
        alert(
          'There was a problem with the payment. Please make sure you provided the test credit card details'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Mfashion Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/QYo.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
