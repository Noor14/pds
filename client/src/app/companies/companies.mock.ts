import { ICompanyRaw } from './companies.model';

export const companiesMock: ICompanyRaw[] = [
  {
    id: 1001,
    name: 'Fischr Pharma Pvt. Ltd',
    type: 1,

    totalProducts: 50,
    totalOrders: 35,
    totalAmount: 240000,
    persons: [{type: 1, firstName: 'Muhammad', lastName: 'Ali', phone: [923002586497, 923452586450]}],

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
  },
  {
    id: 1003,
    name: 'Abbott Pharma Pvt. Ltd',
    type: 0,

    totalProducts: 200,
    totalOrders: 60,
    totalAmount: 470000,
    persons: [{type: 1, firstName: 'Hareem', lastName: 'Fatima', phone: [923002586497, 923452586450]}],

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
  },
  {
    id: 1002,
    name: 'Adcok Pharma Pvt. Ltd',
    type: 2,

    totalProducts: 135,
    totalOrders: 40,
    totalAmount: 150000,
    persons: [{type: 1, firstName: 'Aftab', lastName: 'Ahmed', phone: [923002586497, 923452586450]}],

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
  },
];
