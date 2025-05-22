
import React from 'react';
import { Utensils, Vegan, Cake, Beer } from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';
import { MenuCategory } from '../types/menu';

interface CategoryNavProps {
  onSelectCategory: (category: MenuCategory) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const { activeCategory } = useMenu();
  
  const categories = [
    { id: 'refeicoes', name: 'Refeições', icon: <Utensils size={20} /> },
    { id: 'veganos', name: 'Veganos', icon: <Vegan size={20} /> },
    { id: 'sobremesas', name: 'Sobremesas', icon: <Cake size={20} /> },
    { id: 'bebidas', name: 'Bebidas', icon: <Beer size={20} /> }
  ];
  
  return (
    <nav className="menu-item fixed top-16 left-0 right-0 z-10 overflow-x-auto text-white py-3 max-w-[480px] mx-auto"> {/* bg-black */}
      <div className="flex space-x-4 px-4 min-w-max">
        {categories.map(category => (
          <div 
            key={category.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onSelectCategory(category.id as MenuCategory)}
          >
            <div className={`category-icon mb-1 ${activeCategory === category.id ? 'active' : ''}`}>
              {category.icon}
            </div>
            <span className="text-xs">{category.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
