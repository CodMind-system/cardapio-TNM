
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  
  return (
    <footer className="footer mt-auto">
      <div className="py-2 px-4 text-center text-sm text-gray-500">
        <p>Desenvolvido por <span className="font-bold text-menu-red">CodSource*</span> Tecnologia/2024 -</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
