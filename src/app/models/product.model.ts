import { Category } from "./category.model";

export interface Product {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
