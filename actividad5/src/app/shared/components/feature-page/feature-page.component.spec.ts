import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageComponent } from './feature-page.component';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('title', 'Página de prueba');
    fixture.componentRef.setInput('name', 'Clientes');
    fixture.componentRef.setInput('description', 'Listado de clientes');

    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, name and description', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Página de prueba');
    expect(text).toContain('Clientes');
    expect(text).toContain('Listado de clientes');
  });
});