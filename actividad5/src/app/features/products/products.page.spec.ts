import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';

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
    expect(component).toBeTruthy();
  });

  it('should load products from the service', () => {
    expect(component.products).toBeTruthy();
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should render one card per product', () => {
    const cards = element.querySelectorAll('ion-card.product-card');
    expect(cards.length).toBe(component.products.length);
  });

  it('should render the first product name', () => {
    const firstProduct = component.products[0];
    const text = element.textContent ?? '';

    expect(text).toContain(firstProduct.name);
  });

  it('should show the logout button', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Cerrar Sesión');
  });
});