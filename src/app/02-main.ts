import { ProductMemoryService } from "./services/product.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product1',
  price: 100,
  description: 'blablabla',
  categoryId: 12,
  images: []
});

console.log(productService.getAll());

const products = productService.getAll();

const productId = products[0].id;

productService.update(productId, {title: 'Empanada', price: 500});

console.log(productService.findById(productId));
