import React from 'react';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
