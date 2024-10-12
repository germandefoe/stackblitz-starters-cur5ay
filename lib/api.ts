// Mock data and API functions
// In a real-world scenario, these would interact with a database

import { v4 as uuidv4 } from 'uuid';

export interface Seller {
  id: string;
  name: string;
  contactInfo: string;
  registrationDate: Date;
  isVerified: boolean;
  attributes: Record<string, any>;
}

export interface Buyer {
  id: string;
  name: string;
  email: string;
  shippingAddress: string;
  billingAddress: string;
  registrationDate: Date;
  attributes: Record<string, any>;
}

export interface Offering {
  id: string;
  sellerId: string;
  categoryId: string;
  title: string;
  description: string;
  basePrice: number;
  isActive: boolean;
  attributes: Record<string, any>;
}

export interface Order {
  id: string;
  buyerId: string;
  subscriptionId?: string;
  searchResultId?: string;
  orderDate: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  attributes: Record<string, any>;
}

const sellers: Seller[] = [
  {
    id: uuidv4(),
    name: 'Tech Gadgets Inc.',
    contactInfo: 'contact@techgadgets.com',
    registrationDate: new Date('2023-01-15'),
    isVerified: true,
    attributes: {},
  },
  {
    id: uuidv4(),
    name: 'Fashion Forward',
    contactInfo: 'info@fashionforward.com',
    registrationDate: new Date('2023-02-20'),
    isVerified: true,
    attributes: {},
  },
];

const buyers: Buyer[] = [
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'john@example.com',
    shippingAddress: '123 Main St, City, Country',
    billingAddress: '123 Main St, City, Country',
    registrationDate: new Date('2023-03-10'),
    attributes: {},
  },
  {
    id: uuidv4(),
    name: 'Jane Smith',
    email: 'jane@example.com',
    shippingAddress: '456 Elm St, Town, Country',
    billingAddress: '456 Elm St, Town, Country',
    registrationDate: new Date('2023-04-05'),
    attributes: {},
  },
];

const offerings: Offering[] = [
  {
    id: uuidv4(),
    sellerId: sellers[0].id,
    categoryId: uuidv4(),
    title: 'Smartphone X',
    description: 'Latest smartphone with advanced features',
    basePrice: 699.99,
    isActive: true,
    attributes: {},
  },
  {
    id: uuidv4(),
    sellerId: sellers[1].id,
    categoryId: uuidv4(),
    title: 'Designer Handbag',
    description: 'Luxury handbag made from premium materials',
    basePrice: 299.99,
    isActive: true,
    attributes: {},
  },
];

const orders: Order[] = [
  {
    id: uuidv4(),
    buyerId: buyers[0].id,
    orderDate: new Date('2023-05-15'),
    status: 'delivered',
    totalAmount: 699.99,
    attributes: {},
  },
  {
    id: uuidv4(),
    buyerId: buyers[1].id,
    orderDate: new Date('2023-05-20'),
    status: 'processing',
    totalAmount: 299.99,
    attributes: {},
  },
];

export async function getSellers(): Promise<Seller[]> {
  return sellers;
}

export async function getBuyers(): Promise<Buyer[]> {
  return buyers;
}

export async function getOfferings(): Promise<Offering[]> {
  return offerings;
}

export async function getOrders(): Promise<Order[]> {
  return orders;
}