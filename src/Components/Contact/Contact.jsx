import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [message, setMessage] = useState('');   
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "87d53598-57b0-4a66-a4b7-0a4ac6d68c3c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setMessage("Message submitted successfully! ");
        setShowMessage(true);
        event.target.reset(); 

        
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        setMessage("Failed to submit. Please try again. ");
        setShowMessage(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later. ");
      setShowMessage(true);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects and open to work.
            I am eager to contribute my skills and knowledge in data analysis, visualization, and front-end development to deliver impactful solutions.
            I am excited to collaborate with organizations that value data-driven insights and innovative problem-solving.
            So feel free to send me a message about anything that you want me to work on.
            You can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>sairamswain74@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91-785-5815-606</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Cuttack, Odisha, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>

      {/* Success Message Popup */}
      {showMessage && (
        <div className="popup-message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
