
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="block">
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="flex">
          <div className="w-full">
            <div className="w-full h-40 mb-2 rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="text-menu-red font-bold">
                R${item.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
