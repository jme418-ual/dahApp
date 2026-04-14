/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ClientsPage } from './clients.page';

const jasmineExpect = expect as unknown as <T>(actual: T) => jasmine.Matchers<T>;

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
    jasmineExpect(component).toBeTruthy();
  });

  it('should load clients from the service', () => {
    jasmineExpect(component.clients).toBeTruthy();
    jasmineExpect(component.clients.length).toBeGreaterThan(0);
  });

  it('should render one ion-item per client', () => {
    const items = element.querySelectorAll('ion-item');
    jasmineExpect(items.length).toBe(component.clients.length);
  });

  it('should render client name, email and phone', () => {
    const firstClient = component.clients[0];
    const text = element.textContent ?? '';

    jasmineExpect(text).toContain(firstClient.name);
    jasmineExpect(text).toContain(firstClient.email);
    jasmineExpect(text).toContain(firstClient.phone);
  });

  it('should render client icons in the list', () => {
    const icons = Array.from(element.querySelectorAll('ion-icon'))
      .map(icon => icon.getAttribute('name'));

    jasmineExpect(icons).toContain('person');
    jasmineExpect(icons).toContain('mail');
    jasmineExpect(icons).toContain('call');
  });
});