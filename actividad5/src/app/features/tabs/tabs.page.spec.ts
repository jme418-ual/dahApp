/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TabsPage } from './tabs.page';

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
    expect(component).toBeTruthy();
  });

  it('should show the three tab labels', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Clientes');
    expect(text).toContain('Reservas');
    expect(text).toContain('Productos');
  });

  it('should show the correct icons for each tab', () => {
    const icons = Array.from(element.querySelectorAll('ion-tab-button ion-icon'))
      .map(icon => icon.getAttribute('name'));

    expect(icons).toContain('people');
    expect(icons).toContain('calendar');
    expect(icons).toContain('cube');
  });

  it('should show the logout button', () => {
    const text = element.textContent ?? '';
    expect(text).toContain('Cerrar Sesión');
  });
});