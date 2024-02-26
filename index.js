const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');

const app = express();
const razorpay = new Razorpay({ // Creating a new instance of Razorpay
    key_id: '', // Your Razorpay key ID
    key_secret: '' // Your Razorpay key secret
});

app.use(bodyParser.json());

app.post('/create-order', async (req, res) => {
    const options = {
        amount: 50000,
        currency: 'INR',
        receipt: 'receipt_order_74394',
        payment_capture: 1
    };

    try {

        const response = await razorpay.orders.create(options);
        res.json({ order: response, }); // Sending the order details and payment ID back to the client
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).send('Error in creating order');
    }
});

// Route to capture payment
app.get('/capture-payment', async (req, res) => {
    const { order_id, payment_id } = req.body;
    console.log("🚀 ~ app.get ~ razorpay.payments:", razorpay.payments)

    try {
        const response = await razorpay.payments.capture(payment_id, order_id, 50000);
        console.log("🚀 ~ app.get ~ razorpay.payments:", razorpay.payments)
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error('Error capturing payment:', error);
        res.status(500).send('Error in capturing payment');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
