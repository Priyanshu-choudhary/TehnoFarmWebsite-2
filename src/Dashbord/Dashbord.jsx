import React, { useEffect } from 'react';

function Dashbord() {
  useEffect(() => {
    // Open the link when the component mounts
    window.open("https://technofarm.in/login", "_blank", "noopener noreferrer");
  }, []);

  return (
    <div>
      <p>The login page should have opened automatically. If not, <a href="https://technofarm.in/login" target="_blank" rel="noopener noreferrer">click here</a>.</p>
    </div>
  );
}

export default Dashbord;
