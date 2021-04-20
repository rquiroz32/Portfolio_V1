const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

//get environment variables from .env
dotenv.config()

//Create transporter with Auth info from .env
const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:  process.env.OUTLOOK_EMAIL,
        password: process.env.OUTLOOK_PW
    }
});

// email object to send
const options = {
    from: process.env.OUTLOOK_EMAIL,
    to: 'PLACEHOLDER@GMAIL.COM',
    subject: 'PLACEHOLDER SUBJECT',
    text: 'PLACEHOLDER MESSAGE'
};


//Actually send the email
transporter.sendMail(options, (err, info)=>{
    if(err){
        console.log(err)
    }
    console.log('Sent: \n '+ info.response)
})

