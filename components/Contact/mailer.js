import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.SERVICE_ID,
    process.env.TEMPLATE_ID,
    { name, email, message },
    process.env.USER_ID
  );
};

export default mail;
