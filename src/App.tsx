import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Brands from './components/brands/Brands';
import Features from './components/features/Features';
import Rewards from './components/rewards/Rewards';
import Cta from './components/cta/Cta';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Banner/>
        <Brands/>
        <Features/>
        <Rewards/>
        <Cta/>
      </div>
    </div>
  );
}

export default App;
