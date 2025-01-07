import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  async function getProducts() {
    // Una mejor manera de hacer la peticion
    const { data } = await axios.get<Product[]>( //Tipamos la peticion con <Product[]>, y usamos destructuring
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
