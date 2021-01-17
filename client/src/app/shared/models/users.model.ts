
// export enum EUserType {
//   Store, // customer Store user
//   Doctor, // customer Doctor user
//   SalesRep, // person from Distribution team.
//   Admin // Admin/person from Distribution team.
//   System // Admin/person from Qaswa Software team.
// }

export interface IUserRaw {
  id: string;

  // (Distribution team users starts from: 1 sales rep, 2 admin)
  // (entity/feature-type users starts from: 101 doctor, 102 store, etc)
  // (system/qaswa roles starts from: 201 for system level admin et.c) // very rare
  type: number,

  username: string;
  firstName: string;
  lastName: string;

  areaId: string; // to be transform to Area/City Name
  address: string; // complete simple 1 address.
  contacts: number[] // [123456789, 123456789]

  /* doctor extension ==== */
  // OR
  /* store extension ==== */

  createdOn: string; // memberSince.
  createdBy: string; // id of the admin who created it
  lastUpdatedOn: string;
  lastUpdatedBy: string; // id of the admin who updated it

  // dynamically calculated/evaluated from BE, not from DB.
  lastLoginOn: string;
}

// register custom properties here.
export interface IUser extends IUserRaw {
  customFullName: string;
  customAreaName: string;
}

/* Doctor Model */

export interface IDoctorRaw extends IUser {
  doctorInfo: {
    specialties: number[], // [0, 14, 25]
    experienceSinceYear: number, // e.g 1990

    // dynamically calculated/evaluated from BE, not from DB.
    totalContracts: number,
    totalSaleAmount: number,
  },
}

// register custom added fields here
export interface IDoctor extends IDoctorRaw {
  customSpecialtiesNames: string[]; // ['Gyno', 'General Physcian', 'diabetes']
  customExperienceYears: string; // 10 years, calculate from current year.
  customContacts: string; // join number1 <br> number2
}


/* Store Model */

// export enum IPersonType {
//   Salesman,
//   Manager,
//   Owner
// }

export interface IPerson {
  type: number; // sales person, Manager, Owner
  name: string;
  phone: number;
}

export interface IStoreRaw extends IUser {
  storeInfo: {
    name: string; // e.g. "Al-Madina Pharmacy"
    persons: IPerson[];

    // dynamically calculated/evaluated from BE, not from DB.
    totalSaleAmount: number,
  },
}

// register custom added fields here
export interface IStore extends IStoreRaw {
  customPersons: string;
}
