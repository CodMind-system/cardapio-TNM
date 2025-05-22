import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Intro: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // ajuste o caminho conforme sua rota real
    }, 5000);

    return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
  }, [navigate]);

  return (
    <div className="intro menu-container nomargim bg-black text-white flex items-center justify-center h-screen">
    
    </div>
  );
};

export default Intro;