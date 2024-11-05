import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function NavBarCom() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const customLinks = {
    SALE: { show: '/showsales', add: '/addSale' },
    PURCHASE: { show: '/showPurchase', add: '/AddPurchase' },
    PRODUCTION: { show: '/ShowProduction', add: '/AddProduction' },
    PARTY: { show: '/ShowParty', add: '/AddParty' },
    PRODUCT: { show: '/ShowProduct', add: '/AddProduct' },
    COMPONENT: { show: '/ShowComponent', add: '/AddComponent' },
    EMPLOYEE: { show: '/ShowEmployee', add: '/AddEmployee' },
    OTHER: { show: '/ShowDeletedSales', add: '/ShowDeletedPurchases' },
  };

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

        {/* Main Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link className="hover:text-gray-400" to="/">Home</Link>
          <Link className="hover:text-gray-400" to="/shop">Products</Link>
          <Link className="hover:text-gray-400" to="/AboutUs">About us</Link>
          <Link className="hover:text-gray-400" to="/Services">Services</Link>
        </div>

        {/* Dropdown Menu for Dashboard */}
        <div className="relative md:flex md:items-center md:space-x-4">
          <button
            className="hover:text-gray-400"
            onClick={toggleDropdown}
          >
            Dashboard
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 top-9 w-48 bg-gray-700 text-white rounded-md shadow-lg">
              {Object.keys(customLinks).map((menu) => (
                <div key={menu}>
                  <Link
                    to={customLinks[menu].show}
                    className="block px-4 py-2 text-sm hover:bg-gray-600 flex items-center"
                  >
                    <RemoveRedEyeOutlinedIcon className="mr-2" />
                    SHOW {menu}
                  </Link>
                  {/* <Link
                    to={customLinks[menu].add}
                    className="block px-4 py-2 text-sm hover:bg-gray-600 flex items-center"
                  >
                    <AddCircleOutlineOutlinedIcon className="mr-2" />
                    ADD NEW {menu}
                  </Link> */}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="hidden md:flex md:space-x-4">
          <Link className="hover:text-gray-400" to="/login">
            <img src="/user.svg" alt="User" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarCom;
