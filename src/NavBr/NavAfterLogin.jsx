import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function NavAfterLogin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setusername] = useState(localStorage.getItem('username'));
  useEffect(() => {
    setusername(localStorage.getItem('username'));
  }, [])
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    const [tocken, setTocken] = useState(localStorage.getItem('token'))
    useEffect(() => {
     setTocken(localStorage.getItem('token'));
    }, [])

  const customLinks = {
    SALE: { show: '/showsales', add: '/addSale' },
    PURCHASE: { show: '/showPurchase', add: '/AddPurchase' },
    PRODUCTION: { show: '/ShowProduction', add: '/AddProduction' },
    PARTY: { show: '/ShowParty', add: '/AddParty' },
    PRODUCT: { show: '/ShowProduct', add: '/AddProduct' },
    COMPONENT: { show: '/ShowComponent', add: '/AddComponent' },
    EMPLOYEE: { show: '/ShowEmployee', add: '/AddEmployee' },
    // OTHER: { show: '/ShowDeletedSales', add: '/ShowDeletedPurchases' },
    OTHER: { show: '/Other', add: '/ShowDeletedPurchases' },
  };

  return (
    <nav className="bg-gray-800 text-white p-4 relative z-20"> {/* Ensure nav is positioned above other content */}
      <div className="container mx-auto flex items-center justify-between relative z-20">
        <Link className="text-white text-2xl font-bold" to="/">
          TechnoFarm<span>.</span>
        </Link>
        <button className="text-white md:hidden" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Main Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link className="hover:text-gray-400" to="/showsales">Sale</Link>
          <Link className="hover:text-gray-400" to="/showPurchase">Purchase</Link>
          <Link className="hover:text-gray-400" to="/ShowProduction">Production</Link>
          <Link className="hover:text-gray-400" to="/ShowParty">Party</Link>

          <Link className="hover:text-gray-400" to="/ShowProduct">Product</Link>
          <Link className="hover:text-gray-400" to="/ShowComponent">Component</Link>
          <Link className="hover:text-gray-400" to="/ShowEmployee">Employee</Link>
          <Link className="hover:text-gray-400" to="/Other">Other</Link>
        </div>

        {/* Dropdown Menu for Dashboard */}
        

        {/* User Icon */}
        <div className="hidden md:flex md:space-x-4 ">
          <Link className="hover:text-gray-400 flex gap-2" to="/login">
            <img src="/user.svg" alt="User" />
           {tocken?<p>{username}</p>: <p>Login</p>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavAfterLogin;

