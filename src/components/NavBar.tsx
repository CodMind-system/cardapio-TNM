
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, ArrowRight } from 'lucide-react';
  

const NavBar: React.FC = () => {
    
  return (
    <div className="nav-bar fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-4 flex justify-around developing"> {/* w-full */}
    <Link to="/home" className="footer-icon">
      <Home size={24} />
    </Link>
    <Link to="/home" className="footer-icon">
      <List size={24} />
    </Link>
    <Link to="/home" className="footer-icon">
      <ArrowRight size={24} />
    </Link>
  </div>
  );
};

export default NavBar;