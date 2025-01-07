import { ur } from '@faker-js/faker/.';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';

// Genericos en clases sirven para recibir parametros y usarlos dentro de las clases. Cambia el comportamiento de la clase ahorrando codigo, ejemplo:
export class BaseHttpService<TypeClass> {

  constructor(protected url: string){}

  getAll(): TypeClass[] | Promise<TypeClass[]> {
    return [];
  }

  async getAllV2() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) { // Este update es generico, le pasamos un ID (el tipo para el id) y un DTO (el dto que se usara para actualizar los datos en el objeto), es util ya que nos ahorra muchas lineas de código.
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// 2 objetos creados con la misma clase, pero que pasan un tipo de dato diferente en los '<>'.

const service1 = new BaseHttpService<Category>('');
service1.getAll(); // Devuelve un array de categorias o una promesa que devuelve un array de categorias

const service2 = new BaseHttpService<string>('');
service2.getAll(); // Devuelve un array de strings o una promesa que devuelve un array de strings

// Consumiendo de manera asincrona BaseHttpService
(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1 );

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  //Peticion UPDATE a la API de productos
  productService.update<Product['id'], UpdateProductDto>(1, { // Le pasamos ID del tipo del id del objeto producto (Product['id']); y el DTO correspondiente.
    title: 'Gorro de navidad'
  });

  //Peticion UPDATE a la API de categorias
  categoryService.update<Category['id'], UpdateProductDto>(1, { // Le pasamos ID del tipo del id del objeto Category (Category['id']); y el DTO correspondiente (Que en este caso se pasa uno incorrecto porque no existen dtos de category aún).
    title: 'Gorro de navidad'
  });

  const res = await productService.getAllV2(); // ES MUY IMPORTANTE USAR AWAIT PARA QUE EN TIEMPO DE EJECUCION SE ESPERE A QUE SE RESUELVA LA RESPUESTA Y POR CONSIGUIENTE RECIBIR EL VALOR.
  console.log(res);
})();
