import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-white text-2xl font-bold" href="index.html">
          TechnoFarm<span>.</span>
        </a>
        <button className="text-white md:hidden" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a className="hover:text-gray-400" href="index.html">Home</a>
          <a className="hover:text-gray-400" href="shop.html">Shop</a>
          <a className="hover:text-gray-400" href="about.html">About us</a>
          <a className="hover:text-gray-400" href="services.html">Services</a>
          <a className="hover:text-gray-400" href="blog.html">Blog</a>
          <a className="hover:text-gray-400" href="contact.html">Contact us</a>
        </div>
        <div className="hidden md:flex md:space-x-4">
          <a className="hover:text-gray-400" href="#"><img src="images/user.svg" alt="User" /></a>
          <a className="hover:text-gray-400" href="cart.html"><img src="images/cart.svg" alt="Cart" /></a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
