import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExploreContainerComponent } from './explore-container.component';

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'Clientes');
    fixture.componentRef.setInput('description', 'Listado de clientes');

    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render required inputs', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Clientes');
    expect(text).toContain('Listado de clientes');
  });
});