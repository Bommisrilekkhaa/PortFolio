// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import './index.scss';
const Contact = () => {
 

  return (
    <form action="mailto:bommisrilekkhaaganesan@gmail.com" method="post" encType="text/plain">
        <h1 style={{color:"#b5edff",fontSize:"45px",margin:"30px",paddingLeft:"45px"}}>Contact Me</h1>
      <label>
        Name:
        <input type="text" name="name"  />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email"  />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
