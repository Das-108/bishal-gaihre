
const express = require('express');
const app =express ()

const cors = require('cors');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // or whatever service you are using
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const path = require('path');
const fs = require('fs');

require('dotenv').config();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/', async(req, res) => {
    res.send('Portfoilo is listening')
})

app.get('/download-cv', async(req, res) => {
    const filePath = path.join(__cvDownload, 'public', 'Bishal_Gaihre_CV.pdf');
    
    if (fs.existsSync(filePath)) {
        // res.download() forces the browser to download the file instead of viewing it
        res.download(filePath, 'Bishal_Gaihre_CV.pdf', (err) => {
            if (err) {
                console.error("CV Download Error:", err);
                res.status(500).send({ message: "Could not download the file." });
            }
        });
    } else {
        res.status(404).send({ message: "CV file not found." });
    }
});

app.post('/contact', async (req,res)=> {
    const { name, email, message } = req.body;

    if(!name|| !email || !message) {
        return res.status(400).json({message: 'All fileds are required'})
    }

    const mailOptions = {
        from : `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `NEW PORTFOLIO MESSAGE from ${name}`,
        html : `
            <h3> New Message from your portfoilo </h3>            
            <p> <strong>Name:</strong> ${name}</p>
            <p> <strong>Email:</strong> ${email}</p>
            <p> <strong>Message:</strong> ${name}</p>
            <p style= "border:1px solid #ccc; padding: 10px;">${message}</p>`
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent from ${email}`);
        res.status(200).json({ message: 'Message sent Successfully'})
    } catch (error) {
        console.error("Nodemailer Error: " ,error);
        res.status(500).json({message : 'Failed to send Message.'})
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));