import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JFzlgSHwoJZiPNsnQdeoQIzZ5lqJPGEQEJijUStm6ieSkTA1lpkFqDTEL5LrVfxE5XvTxXr8tRo4GkhMk3aJaVr00AJzKEqXZ'

    const onToken = token => {
        console.log(token);
        alert("Payment is successful");
    }

    return (
        <StripeCheckout 
            label = "Pay Now"
            name = " Crown Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;