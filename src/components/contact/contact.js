import React from 'react';
import linkedIn from '../images/linkedin-icon-512x512-a7sf08js.png'
import github from '../images/github-logo.png'
import email from '../images/email.png'
import '../contact/contact.css'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <a href="mailto:jorie.macd@gmail.com" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={email} alt="Description" /></a>
      <a href="https://github.com/joriemacd" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={github} alt="Description" /></a>
      <a href="https://www.linkedin.com/in/joriem/" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={linkedIn} alt="Description" /></a>
    </div>
  );
};

export default Contact;