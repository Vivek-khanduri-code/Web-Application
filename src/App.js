import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ClientForm from './form/ClientForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Services /><Slider /></>} />
        <Route path="/portfolio" element={<Slider />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ClientForm" element={<ClientForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;