import nodemailer from 'nodemailer';

let mailOptions = {
  name: "",
  from: "",
  to: "dev.cjfritz@gmail.com",
  subject: "New Inquiry",
  message: ""
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dev.cjfritz@gmail.com',
    pass: 'gawvdppfwlaaxqhj'
  }
});

export const setMailOptions = (name: string, fromEmail: string, message: string) => {
  mailOptions.name = name;
  mailOptions.from = fromEmail;
  mailOptions.message = message;
}

export const sendMail = () => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  })
}