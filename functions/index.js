const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
"sk_test_51I7lxXFmHr9yKNWI2Xqj5G4j4jIEuyquCbV0teWNSu5QoZGn0yC2TYYhsCHSqo5YWEw6mWGQFkcK2dxCrWEv4VHC00zySd87r1"
);

// -  API

// -  App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - ApI routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recived BooM >>> for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    //OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    
});

// - Listen command
exports.api = functions.https.onRequest(app);


// Example Endpoint
// http://localhost:5001/amozon-challenge-9ef39/us-central1/api