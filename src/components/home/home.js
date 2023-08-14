import React from 'react';
import jorieImage from '../images/joriewithrectangle.png'
import '../home/home.css'

const Home = () => {
  return (
    <div>
      <h1>Jorie MacDonald</h1>
        <img className="jorieImage" src={jorieImage} alt="Description" />
        <p className='greeting-container'>Hi! I'm a student at Dartmouth College studying Computer Science and Human-Centered Design.</p>
      </div>
  );
};

export default Home;