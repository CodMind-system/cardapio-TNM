
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CategoryNav from '../components/CategoryNav';
import MenuItem from '../components/MenuItem';
import { useMenu } from '../contexts/MenuContext';
import { MenuCategory } from '../types/menu';

const HomePage: React.FC = () => {
  const { menuItems, activeCategory, setActiveCategory } = useMenu();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleSelectCategory = (category: MenuCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="menu-container">
      <Header />
      <CategoryNav onSelectCategory={handleSelectCategory} />
      
      <main className="flex-grow pt-24">
        <div className="menu-items">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </main>
      
       <NavBar /> 
      <Footer />
    </div>
  );
};

export default HomePage;
