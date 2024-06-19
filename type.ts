export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  Image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}