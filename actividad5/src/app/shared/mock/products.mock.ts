import { Product } from '../models/product.model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    price: 1200.00,
    category: 'Electrónica',
    stock: 10,
    description: 'Ultrabook premium con pantalla InfinityEdge'
  },
  {
    id: 2,
    name: 'Smartphone Samsung Galaxy S23',
    price: 950.00,
    category: 'Electrónica',
    stock: 25,
    description: 'Smartphone de gama alta con cámara profesional'
  },
  {
    id: 3,
    name: 'Cafetera Nespresso',
    price: 180.00,
    category: 'Hogar',
    stock: 8,
    description: 'Cafetera automática para cápsulas'
  },
  {
    id: 4,
    name: 'Zapatillas Nike Air Max',
    price: 120.00,
    category: 'Moda',
    stock: 30,
    description: 'Zapatillas deportivas de última generación'
  },
  {
    id: 5,
    name: 'Monitor LG UltraWide',
    price: 350.00,
    category: 'Electrónica',
    stock: 12,
    description: 'Monitor panorámico para productividad'
  },
  {
    id: 6,
    name: 'Auriculares Sony WH-1000XM5',
    price: 399.00,
    category: 'Electrónica',
    stock: 18,
    description: 'Auriculares inalámbricos con cancelación de ruido'
  }
];
