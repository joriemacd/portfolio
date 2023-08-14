// import logo from './logo.svg';
// import { Sign } from 'crypto';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    <Navbar/>
      <p>Currently under construction! </p>
      </header>
    </div>
    </Router>
  );
}

export default App;
