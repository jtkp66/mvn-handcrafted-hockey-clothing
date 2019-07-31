import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Huo4tnRBxWUcQxS1L9KL7Va5";

  const onToken = token => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MVN Hockey"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
