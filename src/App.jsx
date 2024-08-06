import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './ErrorsMessages/PageNotFound';
import NavBarCom from './NavBr/NavBrCom';
import ShopPage from './Shop/ShopPage';
import ProductDetail from './Shop/productDetails';
// import NavBar from './NavBr/NavBrCom';

function App() {
  return (
    <Router>
      <NavBarCom />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />  */}
        <Route path="*" element={<NotFoundPage />} /> {/* Add this route */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
