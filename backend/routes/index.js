var express = require('express');
var router = express.Router();
const axios = require("axios");
const nodemailer = require("nodemailer");

// Back end submit route ->
//    verify recaptcha method ->
//        success? sendEmail function
//        failure? prompt user

router.post('/submit_email', function(req, res, next) {
  console.log("req.body: " + req.body);
  const token = req.body.token;
  console.log("Token: " + token); // [object, Object]
  const form = req.body.form;
  console.log("Form: " + form); //  undefined

  verifyRecaptcha(token).then( response => {
    console.log(response);
    if (response.success) {
      sendEmail(form).then( response => {
        console.log(response);
      })
    } else {
      console.log("Recaptcha Failure");
    }
  })
});

async function verifyRecaptcha(token) {

  try {
    const response = axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    ).then(response => {
      // console.log(response);
      if (response.data.success) {
        console.log("Human");
        return({success: true});
      } else {
        console.log("Robot");
        return({success: false});
      }
    })
    return response;
  } catch(err) {
    console.log(err);
  }
};

async function sendEmail(form) {
  
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASS
    }
  })

  const options = {
    from: process.env.SENDER,
    to: "kingbenjamind@gmail.com",
    phone: form.phone,
    subject: form.subject,
    text: `
      Email: ${form.email}
      Phone Number: ${form.phone}
      Name: ${form.firstName + " " + form.lastName}
      Message: ${form.text}
      `,
    firstName: form.firstName,
    lastName: form.lastName,
  }

  let info = await transporter.sendMail(options)
    
  return info;
}

module.exports = router;
