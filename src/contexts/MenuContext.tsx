
import React, { createContext, useContext, useState } from 'react';
import { MenuItem, MenuCategory } from '../types/menu';

// Menu data
const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Mexican Appetizer',
    description: 'Tortilla Chips With Toppins',
    price: 35.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgtGeVlaLDxA4kXdvhSSUTiT0iNWGPaZHIA&s',
    category: 'refeicoes',
    toppings: [
      { id: 't1', name: 'Guacamole', price: 5.99 },
      { id: 't2', name: 'Jalapeños', price: 3.99 },
      { id: 't3', name: 'Ground Beef', price: 5.99 },
      { id: 't4', name: 'Pico de Gallo', price: 2.99 }
    ]
  },
  {
    id: '2',
    name: 'Pork Skewer',
    description: 'The result of the perfect blend of herbs and spices. The chunks of pork are marinated in a suite of spicy dipping sauce.',
    price: 32.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYpALHUudWnBW_PFeUH8vPgPvoulpSQzOwA&s',
    category: 'refeicoes'
  },
  {
    id: '3',
    name: 'Vegetable Curry',
    description: 'A delicious mix of fresh vegetables in a rich curry sauce',
    price: 32.50,
    image: 'https://media.istockphoto.com/id/982819968/pt/foto/homemade-spicy-vegan-vegetable-curry.jpg?s=612x612&w=0&k=20&c=mo4BFNAqBON8rblOWnr-KshfS-JqKbi1fpDB0Z6BHSo=',
    category: 'veganos'
  },
  {
    id: '4',
    name: 'Vegan Burger',
    description: 'Plant-based patty with fresh toppings on a whole grain bun',
    price: 24.99,
    image: 'https://t3.ftcdn.net/jpg/03/27/04/16/360_F_327041621_f2qFGNqDfN7GLQSaAS5FYSRjkkoFv8mR.jpgondá',
    category: 'veganos'
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with ganache frosting',
    price: 18.50,
    image: '/lovable-uploads/3d37cc0e-9aff-440b-9508-5a2dab216bcf.png',
    category: 'sobremesas'
  },
  {
    id: '6',
    name: 'Fruit Parfait',
    description: 'Layers of fresh fruit, yogurt, and granola',
    price: 15.99,
    image: '/lovable-uploads/97d03e63-5a39-45d0-be34-a2fdf4a04a29.png',
    category: 'sobremesas'
  },
  {
    id: '7',
    name: 'Craft Beer',
    description: 'Local IPA with citrus notes',
    price: 12.99,
    image: '/lovable-uploads/dbaa7384-9e65-4fb3-90dc-b892618dc7e4.png',
    category: 'bebidas'
  },
  {
    id: '8',
    name: 'Tropical Smoothie',
    description: 'Blend of mango, pineapple, and coconut milk',
    price: 9.99,
    image: '/lovable-uploads/cd99cb29-60c3-49f5-b8a5-bb380975757a.png',
    category: 'bebidas'
  },
  {
    id: '9',
    name: 'Pork Skewer',
    description: 'The result of the perfect blend of herbs and spices. The chunks of pork are marinated in a suite of spicy dipping sauce.',
    price: 32.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQpJHvQlk3O1TGctS7mlYUSDjGxPUq4W6lQ&s',
    category: 'refeicoes'
  },
];

interface MenuContextType {
  menuItems: MenuItem[];
  cartItems: {item: MenuItem, quantity: number, selectedToppings: string[]}[];
  activeCategory: MenuCategory;
  setActiveCategory: (category: MenuCategory) => void;
  addToCart: (item: MenuItem, quantity: number, selectedToppings: string[]) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [menuItems] = useState<MenuItem[]>(initialMenuItems);
  const [cartItems, setCartItems] = useState<{item: MenuItem, quantity: number, selectedToppings: string[]}[]>([]);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('refeicoes');

  const addToCart = (item: MenuItem, quantity: number, selectedToppings: string[] = []) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.item.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Update the existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          selectedToppings
        };
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { item, quantity, selectedToppings }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <MenuContext.Provider value={{ 
      menuItems, 
      cartItems, 
      activeCategory, 
      setActiveCategory,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
