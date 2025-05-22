
export type MenuCategory = 'refeicoes' | 'veganos' | 'sobremesas' | 'bebidas';

export interface Topping {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  toppings?: Topping[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedToppings: string[];
}
