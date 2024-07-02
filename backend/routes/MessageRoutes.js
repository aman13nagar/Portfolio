const express = require('express');
const router=express.Router();
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

router.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'aammn52340@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully!');
  });
});
module.exports=router;
