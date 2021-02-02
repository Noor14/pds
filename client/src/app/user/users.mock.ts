import { IUserRaw } from '@root/app/user/users.model';

export const usersRawMock: IUserRaw[] = [
  {
    id: 1001,
    name: 'arif', // for users
    username: 'arif',  // can be a number as string or email
    email: 'arif@cloudways',  // can be a number as string or email
    password: 'H 123, Block C, Test Town, Bin Qasim',
    address: 'H 123, Block C, Test Town, Bin Qasim',
    city: "Karachi",
    status: 'active', //active, deactivate, pending
    role: 'admin',//admin, user, super-admin
    contact: '3216549874',

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
    lastLoginOn: '2021-01-15T21:39:51.835Z',
  },
  {
    id: 1002,
    name: 'arif', // for users
    username: 'arif',  // can be a number as string or email
    email: 'arif@cloudways',  // can be a number as string or email
    password: 'H 123, Block C, Test Town, Bin Qasim',
    address: 'H 123, Block C, Test Town, Bin Qasim',
    city: "Karachi",
    status: 'active',
    role: 'admin',
    contact: '3216549874',

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,
    lastLoginOn: '2021-01-15T21:39:51.835Z',
  },
];
