import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Solution } from './pages/Solution';
import { Testimonials } from './pages/Testimonials';
import { HospitalOffer } from './pages/offers/HospitalOffer';
import { TerritorialOffer } from './pages/offers/TerritorialOffer';
import { DoctorOffer } from './pages/offers/DoctorOffer';
import { PatientOffer } from './pages/offers/PatientOffer';
import { Certifications } from './pages/Certifications';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/offres/hopitaux" element={<HospitalOffer />} />
            <Route path="/offres/crt" element={<TerritorialOffer />} />
            <Route path="/offres/medecins" element={<DoctorOffer />} />
            <Route path="/offres/particuliers" element={<PatientOffer />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;