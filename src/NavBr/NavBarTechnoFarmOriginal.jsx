import React, { useState, useEffect, useRef } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavbarTechnoFarm() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [userDetails, setUserDetails] = useState({ name: '', role: '' });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    // Fetch user details and update state
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
    // <Drawer
    //   variant="permanent"
    //   anchor="left"
    //   sx={{
    //     width: isMinimized ? 70 : 240,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: isMinimized ? 70 : 240,
    //       boxSizing: 'border-box',
    //       transition: 'width 0.3s',
    //     },
    //   }}
    // >
    //   <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'space-between' }}>
    //     <h2 style={{ marginLeft: isMinimized ? 'auto' : 0 }}>Technofarm</h2>
    //     <IconButton onClick={() => setIsMinimized(!isMinimized)}>
    //       <MenuIcon />
    //     </IconButton>
    //   </div>
    //   <List>
    //     {Object.keys(customLinks).map((menu) => (
    //       <div key={menu}>
    //         <ListItem button onClick={() => toggleDropdown(menu)}>
    //           <ListItemText primary={menu} />
    //           {isDropdownOpen[menu] ? <ExpandLess /> : <ExpandMore />}
    //         </ListItem>
    //         <Collapse in={isDropdownOpen[menu]} timeout="auto" unmountOnExit>
    //           <List component="div" disablePadding>
    //             <ListItem button component="a" href={customLinks[menu].show} sx={{ pl: 4 }}>
    //               <ListItemIcon>
    //                 <RemoveRedEyeOutlinedIcon />
    //               </ListItemIcon>
    //               <ListItemText primary="SHOW" />
    //             </ListItem>
    //             <ListItem button component="a" href={customLinks[menu].add} sx={{ pl: 4 }}>
    //               <ListItemIcon>
    //                 <AddCircleOutlineOutlinedIcon />
    //               </ListItemIcon>
    //               <ListItemText primary="ADD NEW" />
    //             </ListItem>
    //           </List>
    //         </Collapse>
    //       </div>
    //     ))}
    //     <ListItem button>
    //       <ListItemText primary={userDetails.name || "User"} />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemText secondary={userDetails.role} />
    //     </ListItem>
    //   </List>
    // </Drawer>
    <div></div>
  );
}

export default NavbarTechnoFarm;
