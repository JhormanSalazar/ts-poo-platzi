import { faker, id_ID } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService{

  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.string.uuid(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      },
    };
    this.products.push(newProduct);
    return newProduct;
  }

  add(data: Product) {
    this.products.push(data);
    return data;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findById(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
