import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Brands from './components/brands/Brands';
import Features from './components/features/Features';
import Rewards from './components/rewards/Rewards';
import Cta from './components/cta/Cta';
import Slider from './components/slider/Slider'
import Invitation from "./components/invitation/Invitation";
import Blog from "./components/blog/Blog";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer"
;
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
        <Slider/>
        <Invitation/>
        <Blog/>
        <Download/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
