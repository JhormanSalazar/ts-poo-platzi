import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      // Las promesas pueden tiparse poniendole el tipo de dato dentro de <>;
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() { // Una mejor manera de hacer la peticion
    const res = await axios.get('https://api.escuelajs.co/api/v1/products');
    return res.data;
  }

  console.log('---'.repeat(10));
  const res = await delay(3000);
  console.log(res);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsV2 =  getProductsAsync();
  console.log(productsV2);
})();
