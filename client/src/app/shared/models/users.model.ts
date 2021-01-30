
// abstraction only - no entity has this model. only to extend to User, Store, Store,
export interface IUserCommonRaw {
  id: number;

  // Here are "type" field possible values.
  // (Distribution team users starts from: 1 sales rep, 10 admin)
  // (entity/feature-type users starts from: 101 store, 102 doctor etc)
  // (system/qaswa roles starts from: 201 for system level admin et.c) // very rare
  type: number,

  username: string;
  areaId: number; // to be transform to Area/City Name
  address: string; // complete simple 1 address string..

  /* user-abstract model extension ==== */
  // OR
  /* store model extension ==== */
  // OR
  /* doctor model extension ==== */

  createdOn: string; // to be used as "Member Since". // (new Date()).toISOString(); // "2021-01-15T21:39:51.835Z"
  createdBy: number; // id of the admin who created it
  lastUpdatedOn: string; // "2021-01-15T21:39:51.835Z"
  lastUpdatedBy: number; // id of the admin who updated it

  // dynamically calculated/evaluated from BE, not from DB.
  lastLoginOn: string;
}

export interface IUserCommonParsed {
  customAreaName: string;
}

// for Admin, or Sales Rep of distribution team.
export interface ISystemUserRaw extends IUserCommonRaw {
  firstName: string;
  lastName: string;

  contacts: number[] // [123456789, 123456789]
}

export interface ISystemUserParsed extends IUserCommonParsed, ISystemUserRaw {
  customFullName: string;
  // other info like assignedTo, assignedBy, etc.
}

// for store, see stores.model.ts =====

// for doctor, see doctor.model.ts ====
