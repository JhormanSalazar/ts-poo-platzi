import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttpService extends BaseHttpService<Product> { //Heredar una clase generica es muy util, ya viene con todos el crud y podemos agregar más requests.
  otroRequest() {
    return this.url
  }
}
