
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

  /* user model extension ==== */
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

/* Doctor Model */

export interface IDoctorRaw extends ISystemUserParsed {
  doctorInfo: {
    certifications: number[], // [0, 14, 15] // for names check IDoctor
    specialties: number[], // [0, 14, 25] // for names check IDoctor
    experienceSince: string, // "2021-01-15T21:39:51.835Z"

    // dynamically calculated/evaluated from BE, not from DB.
    totalContracts: number,
    totalSaleAmount: number,
  },
}

// register custom added fields here
export interface IDoctorParsed extends IUserCommonParsed, IDoctorRaw {
  customCertificationsNames: string; // MBBS, FCPS, MCPS, BDS(Dentist), Other etc.
  customSpecialtiesNames: string; // 'Gyno', 'General Physcian', 'diabetes'
  customExperienceYears: string; // 10 years, calculate from doctorInfo.experienceSinceYear
  customContacts: string; // join number1 <br> number2
}


/* Store Model */

export interface IPersonRaw {
  type: number; // sales person, Manager, Owner
  firstName: string;
  lastName: string;
  phone: number;
}

export interface IStoreRaw extends IUserCommonRaw {
  storeInfo: {
    name: string; // e.g. "Al-Madina Pharmacy"
    persons: IPersonRaw[];

    // dynamically calculated/evaluated from BE, not from DB.
    totalSaleAmount: number,
  },
}

// register custom added fields here
export interface IStoreParsed extends IUserCommonParsed, IStoreRaw {
  customPersons: string; // name <br> phone, name <br> phone. we may add roles as well.
}
