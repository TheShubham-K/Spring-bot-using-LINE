import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function App() {
    async function handleToken(token) {
        console.log(token);
        await axios.post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 500,
        },}).then(() => {
                alert("Payment Success");
           }).catch((error) => {
                alert(error);
           });
    }
    return (
        <div className="App">
          <Stripe
            stripeKey="pk_test_51KnMTYSC7Y26OGBT3TRFwSgFwx3ycv4TOjJEdbVcMbpOnMiX1YzgpNZEF2vM1GgerRfNr7K5GEn3IM4bAo9W9pJG00uF24COG9"
            token={handleToken}
          />
        </div>
    );
}
export default App;