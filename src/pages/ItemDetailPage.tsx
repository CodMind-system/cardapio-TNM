
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { menuItems, addToCart } = useMenu();
  const { toast } = useToast();
  
  const item = menuItems.find(item => item.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  
  if (!item) {
    return <div>Item not found</div>;
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prev => 
      prev.includes(toppingId) 
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    );
  };
  
  const calculateTotalPrice = () => {
    let total = item.price * quantity;
    
    if (item.toppings) {
      item.toppings.forEach(topping => {
        if (selectedToppings.includes(topping.id)) {
          total += topping.price * quantity;
        }
      });
    }
    
    return total.toFixed(2);
  };
  
  const handleAddToCart = () => {
    addToCart(item, quantity, selectedToppings);
    toast({
      title: "Adicionado à mesa",
      description: `${item.name} foi adicionado ao seu pedido.`,
    });
    navigate('/home');
  };
  
  return (
    <div className="menu-container">
      <div className="p-4 flex items-center">
        <button onClick={() => navigate('/home')} className="mr-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold">{item.name}</h1>
      </div>
      
      <div className="px-4 pb-24">
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-menu-red text-xl font-bold">R${item.price.toFixed(2)}</h2>
          
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden developing">
            <button 
              className="p-1 px-3 text-menu-red"
              onClick={() => handleQuantityChange(-1)}
            >
              <Minus size={16} />
            </button>
            <span className="px-3">{quantity}</span>
            <button 
              className="p-1 px-3 text-menu-red"
              onClick={() => handleQuantityChange(1)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        {item.toppings && item.toppings.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Toppings</h3>
            <div className="space-y-3">
              {item.toppings.map(topping => (
                <div 
                  key={topping.id}
                  className="flex justify-between items-center"
                >
                  <span>{topping.name}</span>
                  <div className="flex items-center">
                    <span className="mr-3">R${topping.price.toFixed(2)}</span>
                    <div 
                      onClick={() => handleToppingToggle(topping.id)}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer developing ${
                        selectedToppings.includes(topping.id) 
                          ? 'bg-menu-red border-menu-red text-white' 
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedToppings.includes(topping.id) && <span>✓</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <button
          onClick={handleAddToCart}
          className="fixed bottom-20 left-4 right-4 bg-menu-red text-white py-3 rounded-md font-semibold developing"
        >
          Adicionar a mesa
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ItemDetailPage;
