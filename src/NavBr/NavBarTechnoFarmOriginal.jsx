import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
function NavbarTechnoFarm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [userDetails, setUserDetails] = useState({ name: '', role: '' });
  const dropdownRefs = useRef({}); // Create a ref to manage dropdowns

  useEffect(() => {
    fetchUserDetails();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchUserDetails = () => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        const userData = JSON.parse(xmlHttp.responseText);
        setUserDetails({ name: userData.name, role: userData.roles[0] });
      }
    };
    xmlHttp.open("GET", "/employee/resource", true);
    xmlHttp.send(null);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleClickOutside = (event) => {
    Object.keys(isDropdownOpen).forEach((menu) => {
      if (dropdownRefs.current[menu] && !dropdownRefs.current[menu].contains(event.target)) {
        setIsDropdownOpen((prev) => ({ ...prev, [menu]: false }));
      }
    });
  };

  const customLinks = {
    SALE: { show: '/showsales', add: '/addSale' },
    PURCHASE: { show: '/showPurchase', add: '/AddPurchase' },
    PRODUCTION: { show: '/ShowProduction', add: '/AddProduction' },
    PARTY: { show: '/ShowPArty', add: '/AddParty' },
    PRODUCT: { show: '/ShowProduct', add: '/AddProduct' },
    COMPONENT: { show: '/ShowComponent', add: '/AddComponent' },
    EMPLOYEE: { show: '/ShowEmployee', add: '/AddEmployee' },
    OTHER: { show: '/ShowDeletedSales', add: 'ShowDeletedPurchases' },
  };

  return (
    <div></div>
    // <nav className="navbar ">
    //   <div className="navbar-container h-7">
    //     <a className="navbar-brand" href="/">Technofarm</a>
    //     <button className="navbar-toggler" onClick={() => toggleDropdown('main')}>
    //       ☰
    //     </button>
    //     <div className={`navbar-menu ${isDropdownOpen.main ? 'open' : ''}`}>
    //       <ul className="navbar-list">
    //         {['SALE', 'PURCHASE', 'PRODUCTION', 'PARTY', 'PRODUCT', 'COMPONENT', 'EMPLOYEE', 'OTHER'].map((menu) => (
    //           <li className="navbar-item dropdown" key={menu} ref={(el) => (dropdownRefs.current[menu] = el)}>
    //             <span className="dropdown-toggle" onClick={() => toggleDropdown(menu)}>
    //               {menu}
    //             </span>
    //             {isDropdownOpen[menu] && (
    //               <ul className="dropdown-menu">
    //                 <li>
    //                   <a href={customLinks[menu].show} className="dropdown-item">
    //                     <RemoveRedEyeOutlinedIcon /> SHOW
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href={customLinks[menu].add} className="dropdown-item">
    //                     <AddCircleOutlineOutlinedIcon /> ADD NEW
    //                   </a>
    //                 </li>
    //               </ul>
    //             )}
    //           </li>
    //         ))}

    //         <li className="navbar-item dropdown" ref={(el) => (dropdownRefs.current.user = el)}>
    //           <span className="dropdown-toggle" onClick={() => toggleDropdown('user')}>
    //             {userDetails.name || "User"}
    //           </span>
    //           {isDropdownOpen.user && (
    //             <ul className="dropdown-menu">
    //               <li><label>{userDetails.role}</label></li>
    //             </ul>
    //           )}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavbarTechnoFarm;
