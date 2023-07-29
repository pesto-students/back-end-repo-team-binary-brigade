import nodemailer from "nodemailer";

const EmailSender = async (body, subject, emailTo) => {
  let transporter = await nodemailer.createTransport({
    host: "host",
    port: "port",
    secure: true,
    auth: {
      user: "youremail@email.in",
      pass: "yourpassword",
    },
  });
  // setup email data with unicode symbols
  let mailOptions = {
    from: "BrandName <youremail@email.in>",
    to: emailTo,
    subject: subject,
    html: body,
  };

  // send mail with defined transport object
  return await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + info.response);
    }
  });
};
export default EmailSender;
