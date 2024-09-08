import React from 'react';
import { Link } from 'react-router-dom';

function NavBarCom() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-white text-2xl font-bold" to="/">
          TechnoFarm<span>.</span>
        </Link>
        <button className="text-white md:hidden" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link className="hover:text-gray-400" to="/">Home</Link>
          <Link className="hover:text-gray-400" to="/shop">Products</Link>
          <Link className="hover:text-gray-400" to="/AboutUs">About us</Link>
          <Link className="hover:text-gray-400" to="/Services">Services</Link>
        </div>
        <div className="hidden md:flex md:space-x-4">
          <Link className="hover:text-gray-400" to="#"><img src="/user.svg" alt="User" /></Link>
          <Link className="hover:text-gray-400" to="/cart"><img src="/cart.svg" alt="Cart" /></Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarCom;
