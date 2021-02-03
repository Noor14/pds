import { IStoreRaw } from '@root/app/store/stores.model';

export const storesRawMock: IStoreRaw[] = [
  {
    id: 1001,
    type: 101, // for stores
    status: 1, // active
    areaId: 1001,

    username: 'bismillahms@gmail.com',  // can be a number as string or email
    address: 'H 123, Block C, Test Town, Bin Qasim',

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
    lastLoginOn: '2021-01-15T21:39:51.835Z',

    storeInfo: {
      name: 'Bismillah Medical Store',
      persons: [{type: 1, firstName: 'Muhammad', lastName: 'Ali', phone: [923002586497, 923452586450]}],

      totalOrders: 60,
      totalSaleAmount: 658451,
    }
  },
  {
    id: 1002,
    type: 101, // for stores
    status: 1, // active
    areaId: 1001,

    username: 'rutba@pharmacy.com',  // can be a number as string or email
    address: 'H 50 Street 1, Market 40 Dip',

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
    lastLoginOn: '2021-01-15T21:39:51.835Z',

    storeInfo: {
      name: 'Rutba Pharmacy',
      persons: [{type: 1, firstName: 'Roman', lastName: 'Ahmed', phone: [923002586497, 923452586450]}],

      totalOrders: 35,
      totalSaleAmount: 351204,
    }
  },
  {
    id: 1003,
    type: 101, // for stores
    status: 1, // active
    areaId: 1001,

    username: '923001234567', // can be a number as string or email
    address: 'H 200, Street 2, Bazar Manjushoori',

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
    lastLoginOn: '2021-01-15T21:39:51.835Z',

    storeInfo: {
      name: 'Buraaq Medical Store',
      persons: [{type: 1, firstName: 'Salal', lastName: 'Ahmed', phone: [923002586497, 923452586450]}],

      totalOrders: 40,
      totalSaleAmount: 51250,
    }
  },
];
