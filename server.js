const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')

//express middleware
app.use(express.urlencoded({ extended: true }));

// add env variables from .env
dotenv.config()

//Create transporter with Auth info from .env
const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:  process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PW
    }
});

// use build folder in prod
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//this is a S.P.A. so always serve index html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});



//post route for sending an email
app.post('/sendMail', (req, res) => {
    const Name = req.body.Name
    const Subject = req.body.Subject
    const Message = req.body.Message

    const options = {
        from: process.env.OUTLOOK_EMAIL,
        to: process.env.PERSONAL_EMAIL,
        subject: Subject,
        text: `New Message from ${Name} : \n \n ${Message}`
    };

    //Actually send the email
    transporter.sendMail(options, (err, info) => {
        if (err) {
            //log any errors and send to both client and server
            console.log(err)
            res.status(500).send('Internal Server Error sending email, error listed below: \n ' + err)
        }        
        console.log('Sent: \n ' + info.response)
        res.sendStatus(200);
    })

})











// listen on the port defined in process.env
app.listen(PORT, () => {
    console.log("Listening on Port" + PORT)
})