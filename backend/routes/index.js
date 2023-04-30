var express = require('express');
var router = express.Router();
const axios = require("axios");
const nodemailer = require("nodemailer");

// Back end submit route ->
//    verify recaptcha method ->
//        success? sendEmail function
//        failure? prompt user

router.post('/submit_email', function(req, res, next) {
  const token = req.body.token;
  const form = req.body.form;

  verifyRecaptcha(token).then( response => {
    console.log(response); // undefined
    if (response.response.success) {
      sendEmail(form).then(

      )
    } else {
      console.log("Recaptcha Failure");
    }
  })
});

async function verifyRecaptcha(token) {

  try {
    axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    ).then(response => {
      if (response.data.success) {
        console.log("Human");
        return({"response": "Success"});
      } else {
        console.log("Robot");
        return({"response": "Failure"});
      }
    })
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
      ${form.text}
      `,
    firstName: form.firstName,
    lastName: form.lastName,
  }

  transporter.sendMail(options, function(err, info) {
    if(err) {
      console.log(err);
      return
    } 
    console.log(info.response);
    return info.response;
  })
  return info.response;
}

module.exports = router;
