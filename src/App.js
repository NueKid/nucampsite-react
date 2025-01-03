import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import React from 'react';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage.js';
import AboutPage from './pages/AboutPage.js';
import { fetchCampsites } from './features/campsites/campsitesSlice.js';
import './App.css';
import { fetchPartners } from './features/partners/partnersSlice.js';
import { fetchPromotions } from './features/promotions/PromotionsSlice.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
        <Route 
          path='/directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
