const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(
  "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"
);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email, // Change to your recipient
    from: "6alex6kash6@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fuck",
    text: `Hello, ${name}`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.send(msg);
};

const sendGoodbyeEmail = (email, name) => {
  const msg = {
    to: email, // Change to your recipient
    from: "6alex6kash6@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fuck",
    text: `Fuck you, ${name}`,
  };

  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
