
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="menu-container nomargim bg-black text-white">
      <div className="p-4">
        <Link to="/home" className="text-white">
          <ArrowLeft size={24} />
          <span className="ml-2">Voltar</span>
          </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center py-">
        <div className="w-12 h-12 mb-8">
          <img src="/img/logo principal branco.png" alt="TNM logo" className="w-full h-full object-contain" />
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-6">Sobre Nós</h2>
        
        <p className="text-base mb-8">
          Nós CodSource somos uma equipe dedicada a oferecer serviços de qualidade com atenção, profissionalismo e confiança. Nosso objetivo é lhe dar tranquilidade ao seu dia a dia, conectando você aos nossos serviços com apenas alguns cliques, garantindo pontualidade, agilidade, profissionalismo e atenção.
        </p>
        
        <div className="mt-10 mb-6">
          <h3 className="text-xl font-bold mb-2">Versão</h3>
          <p className="text-sm">Versão: 1.0.0</p>
          <p className="text-sm">Última atualização: Abril 16, 2025</p>
          <p className="text-sm">Status: Em fase de testes com validação real (MVT)</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">contato</h3>
          <p className="text-sm">Telefone: (00) 12345-6789</p>
          <p className="text-sm">E-mail: contato@codmind.com</p>
          <p className="text-sm">Instagram: (@nomedeexemplo)</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
