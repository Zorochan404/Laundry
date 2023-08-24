import nodemailer from 'nodemailer'
import dotenv from 'dotenv'


dotenv.config()


const sendEmail = async (options) =>{



const transporter = nodemailer.createTransport({
  service: process.env.SMPT_service,
  auth: {

    user: process.env.mail,
    pass: process.env.pass
  }
});

    await transporter.sendMail({
    from: '',
    to: options.email,
    subject: options.subject,
    text: options.message, 
  });

}

export default sendEmail