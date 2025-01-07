import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = ProductHttpService.createProductHttpService('Admin');

  console.log('---'.repeat(10));

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.title));

  const productId = products[1].id;
  await productService.update(productId, { title: 'Cadena de oro', price: 1000, description: 'Created by Morgone'});

  const product1 = await productService.findById(productId);
  console.log(product1);
})();

