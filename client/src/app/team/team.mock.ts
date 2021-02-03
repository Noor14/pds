import { ITeamUserRaw } from './/team.model';

export const teamUsersRawMock: ITeamUserRaw[] = [
  {
    id: 1002,
    type: 1, // sales rep
    status: 1, // active
    areaId: 1001,

    firstName: 'Arif', // for users
    lastName: 'Shabbir', // for users
    username: 'arif@cloudways.com',
    password: 'test',
    address: 'H 123, Streat 2, Test Town, Karachi.',
    contacts: [923330400808],

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,

    lastLoginOn: '2021-01-15T21:39:51.835Z',
  }, {
    id: 1002,
    type: 10, // admin
    status: 1, // active
    areaId: 1002,

    firstName: 'Shahzad', // for users
    lastName: 'Nawaz', // for users
    username: 'shahzadcs@hotmail.co.uk',
    password: 'test',
    address: 'H 123, Block C, Test Town, Bin Qasim',
    contacts: [923002609916],

    createdOn: '2021-01-15T21:39:51.835Z',
    createdBy: 1001,
    lastUpdatedOn: '2021-01-15T21:39:51.835Z',
    lastUpdatedBy: 1001,

    lastLoginOn: '2021-01-15T21:39:51.835Z',
  }
];
