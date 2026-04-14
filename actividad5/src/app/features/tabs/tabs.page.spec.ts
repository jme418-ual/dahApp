/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TabsPage } from './tabs.page';

const jasmineExpect = expect as unknown as <T>(actual: T) => jasmine.Matchers<T>;

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    jasmineExpect(component).toBeTruthy();
  });

  it('should show the three tab labels', () => {
    const text = element.textContent ?? '';
    jasmineExpect(text).toContain('Clientes');
    jasmineExpect(text).toContain('Reservas');
    jasmineExpect(text).toContain('Productos');
  });

  it('should show the correct icons for each tab', () => {
    const icons = Array.from(element.querySelectorAll('ion-tab-button ion-icon'))
      .map(icon => icon.getAttribute('name'));

    jasmineExpect(icons).toContain('people');
    jasmineExpect(icons).toContain('calendar');
    jasmineExpect(icons).toContain('cube');
  });

  it('should show the logout button', () => {
    const text = element.textContent ?? '';
    jasmineExpect(text).toContain('Cerrar Sesión');
  });
});