import { ICompanyRaw } from './companies.model';

export const companiesMock: ICompanyRaw[] = [
  {
    id: '0000101',
    name: 'Fischr Pharma Pvt. Ltd',
    type: 3,
    totalProducts: 50,
    totalOrders: 35,
    totalAmount: 240000,
    startedSince: '06/Nov/2020',
    contact: '+923001234567',
  },
  {
    id: '0000102',
    name: 'Abbott Pharma Pvt. Ltd',
    type: 1,
    totalProducts: 200,
    totalOrders: 60,
    totalAmount: 470000,
    startedSince: '05/Nov/2020',
    contact: '+923001234800',
  },
  {
    id: '0000103',
    name: 'Adcok Pharma Pvt. Ltd',
    type: 2,
    totalProducts: 135,
    totalOrders: 40,
    totalAmount: 150000,
    startedSince: '04/Nov/2020',
    contact: '+923001234909',
  },
];
