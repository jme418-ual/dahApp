import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ClientsPage } from './clients.page';

describe('ClientsPage', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load clients from the service', () => {
    expect(component.clients).toBeTruthy();
    expect(component.clients.length).toBeGreaterThan(0);
  });

  it('should render one ion-item per client', () => {
    const items = element.querySelectorAll('ion-item');
    expect(items.length).toBe(component.clients.length);
  });

  it('should render client name, email and phone', () => {
    const firstClient = component.clients[0];
    const text = element.textContent ?? '';

    expect(text).toContain(firstClient.name);
    expect(text).toContain(firstClient.email);
    expect(text).toContain(firstClient.phone);
  });

  it('should render client icons in the list', () => {
    const icons = Array.from(element.querySelectorAll('ion-icon'))
      .map(icon => icon.getAttribute('name'));

    expect(icons).toContain('person');
    expect(icons).toContain('mail');
    expect(icons).toContain('call');
  });
});