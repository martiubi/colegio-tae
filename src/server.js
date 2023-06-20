import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/api/sendemail', (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: process.env.USER_TRANSPORTER,
      pass: process.env.PASS_TRANSPORTER,
    },
  });

  const mailOptions = {
    from: 'martinaubilla@icloud.com',
    to: 'martinaubilla295@gmail.com',
    subject: 'Nueva Consulta TAE',
    text: `Nombre y apellido: ${name}\nEmail: ${email}\nTelefono: ${phone}\nConsulta: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
