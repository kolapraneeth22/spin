import React from 'react';
import './App.css';
import Header from './Components/HeaderComp/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HeadBuyCars from './Components/pages/HeadBuyCars';
import HeadSellCars from './Components/pages/HeadSellCars';
import MainContent from './Components/MainContent';
import CarBuy from './Components/pages/CarBuy/CarBuy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/buycar" element={<HeadBuyCars />} />
          <Route path="/buycar/location/:location" element={<CarBuy />} />
          <Route path="/sellcar" element={<HeadSellCars />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
