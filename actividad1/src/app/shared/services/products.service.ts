import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS_MOCK } from '../mock/products.mock';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS_MOCK;
  }
}
