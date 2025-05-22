
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = "Nome Do Restaurante", showBackButton = false }) => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/item/');
  const isAboutPage = location.pathname === '/about';
  
  return (
    <header className={`p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-20 max-w-[480px] mx-auto ${isAboutPage ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center space-x-2">
        {showBackButton && (
          <Link to="/" className={`${isDetailPage ? 'text-black' : 'text-white'}`}>
            <ArrowLeft size={24} />
          </Link>
        )}
        {isDetailPage ? (
          <div className="flex items-center">
            <ArrowLeft size={24} className="mr-2" />
            <span className="font-semibold">{title}</span>
          </div>
        ) : (
          <h1 className={`text-lg font-bold ${isAboutPage ? 'text-white' : 'text-black'}`}>{title}</h1>
        )}
      </div>
      <Link to="/about" className="footer-icon w-8 h-8">
        <img src="/img/logo_tnm.png" alt="TNM logo" className="w-full h-full object-contain" />
      </Link>
    </header>
  );
};

export default Header;
