export interface Product {
  id: string;
  name: string;
  price: string;
  discountPrice: string;
  Image: string;
  category: string;
  details: string;
  isVeg: boolean;
  ingredients: string[];
  energy: number;
  carbs: number;
}

export interface CartItem extends Product {
  quantity: number;
}