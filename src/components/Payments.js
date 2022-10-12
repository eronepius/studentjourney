import React from "react"
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import logo from "./assets/logo.jpeg";

const PaymentDiv = styled.div`
    height: 90vh;
    display:flex;
    justify-content: center;
    align-items: center;

`

function Payments(){
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

// Then I'll add the function displayRazorpay that will first load the script, then make a post request to our back-end route and finally show the popup.
async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    // const result = await axios.post("http://localhost:5000/payment/orders");

    // if (!result) {
    //     alert("Server error. Are you online?");
    //     return;
    // }

    // Getting the order details back
    const amount = 2000;
    const order_id = "order_K1PTHjYYqbeO9x";
    const currency = "INR";

    const options = {
        key: "rzp_test_tk5rRGbcR8w2DP", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Anna University",
        description: "Semester I marksheet Payment",
        image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            // const result = await axios.post("http://localhost:5000/payment/success", data);

            // alert(result.data.msg);
        },
        prefill: {
            name: "Anton Erone Pius",
            email: "aepius@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Anton Corporate Office",
        },
        theme: {
            color: "#000000",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
return(
    <PaymentDiv>
    <Button variant="dark" onClick={displayRazorpay}>Proceed With Payment of INR 20</Button>
    </PaymentDiv>
)

}

export default Payments;