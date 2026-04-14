/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';

const jasmineExpect = expect as unknown as <T>(actual: T) => jasmine.Matchers<T>;

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    jasmineExpect(component).toBeTruthy();
  });

  it('should load products from the service', () => {
    jasmineExpect(component.products).toBeTruthy();
    jasmineExpect(component.products.length).toBeGreaterThan(0);
  });

  it('should render one card per product', () => {
    const cards = element.querySelectorAll('ion-card.product-card');
    jasmineExpect(cards.length).toBe(component.products.length);
  });

  it('should render the first product name', () => {
    const firstProduct = component.products[0];
    const text = element.textContent ?? '';

    jasmineExpect(text).toContain(firstProduct.name);
  });

  it('should show the logout button', () => {
    const text = element.textContent ?? '';
    jasmineExpect(text).toContain('Cerrar Sesión');
  });
});