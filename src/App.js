// import logo from './logo.svg';
// import { Sign } from 'crypto';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import SubPageDetails from './components/subpagedetails/subpagedetails';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar />
      <div className='content-container'>
        <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/:projectName" element={<SubPageDetails/>} />
        </Routes>
      </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
