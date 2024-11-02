import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './ErrorsMessages/PageNotFound';
import NavBarCom from './NavBr/NavBrCom';
import ShopPage from './Shop/ShopPage';
import ProductDetail from './Shop/productDetails';
import AboutUs from './Home/Aboutus/AboutUs';
import Service from './Services/Service';
import ShowSales from './Dashboard/Sales/ShowSales';
import Login from './Dashboard/Login/Login';
import SaleDetails from './Dashboard/Sales/SalesDeatils';
import AddSaleForm from './Dashboard/Sales/AddSale';
import ShowDeletedSales from './Dashboard/Sales/ShowDeletedSales';
import ShowPurchase from './Purchase/Purchase';
import AddPurchaseForm from './Purchase/AddPurchase';
import ShowDeletedPurchases from './Purchase/ShowDeletedPurchase';
// import NavBar from './NavBr/NavBrCom';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Add this route */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Service />} />
        
        <Route path="/ShowSales" element={<ShowSales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sale/party/:id" element={<SaleDetails />} />
        <Route path="/addSale" element={<AddSaleForm />} />
        <Route path="/ShowDeletedSales" element={<ShowDeletedSales />} />
        <Route path="/ShowPurchase" element={<ShowPurchase />} />
        <Route path="/AddPurchase" element={<AddPurchaseForm />} />
        <Route path="/ShowDeletedPurchases" element={<ShowDeletedPurchases />} />

      </Routes>
    </Router>
  );
}

export default App;
