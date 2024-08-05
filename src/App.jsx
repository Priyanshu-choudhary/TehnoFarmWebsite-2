import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import ShopPage from './Shop/ShopPage';
import AboutPage from './About/AboutPage';
import ServicesPage from './Services/ServicesPage';
import BlogPage from './Blog/BlogPage';
import ContactPage from './Contact/ContactPage';
import NotFoundPage from './NotFoundPage'; // Import the NotFoundPage component
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
