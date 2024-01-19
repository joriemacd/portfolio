import React from 'react';
import jorieImage from '../images/jorie-black-background.jpg'
import '../about/about.css'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className='content-container'>
        <img className="jorieImage" src={jorieImage} alt="Description" />
        <p className='about-text'>I'm Jorie, a '25 at Dartmouth College studying Computer Science & Human Centered Design.
        <p className='about-text'>I'm from San Diego, California and recently studied abroad on Semester at Sea. On campus, I am a tour guide and an executive board member of my sorority, Kappa Kappa Gamma.  </p>

          
           </p>
      </div>
    </div>
  );
};

export default About;