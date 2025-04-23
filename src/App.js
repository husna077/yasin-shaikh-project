// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // ❗ no curly braces
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import LeaderTraining from './components/LeaderTraining';
import HostMentor from './components/HostMentor';
import Framework from './components/Framework';
import Achievements from './components/Achievements';
import GetCertification from './components/GetCertification';
import FAQ from './components/FAQ';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Benefits/>
      <Feedback/>
      <LeaderTraining/>
      <HostMentor/>
      <Framework/>
      <Achievements/>
      <GetCertification/>
      <FAQ/>
      <Footer />
      
      
    </div>
  );
}

export default App;
