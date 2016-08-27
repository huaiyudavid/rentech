import React from 'react';

const ContactUs = () => {
  var headerStyle = {
    fontFamily: "century gothic",
    color: "#004DE6"
  };

  var bodyStyle = {
    fontFamily: "century gothic",
    color: "#808080"
  };

  return (
    <div>
      <h1 style={headerStyle}>Contact Us</h1>
      <p style={bodyStyle}>
        Email: support@rentech.online <br/>
        Phone: 1-800-REN-TECH (1-800-736-8324) <br/>
      </p>
    </div>
  )
}

export default ContactUs;
