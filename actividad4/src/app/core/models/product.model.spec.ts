import { TestBed } from '@angular/core/testing';

import { ProductModel } from './product.model';

describe('ProductModel', () => {
  let service: ProductModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
