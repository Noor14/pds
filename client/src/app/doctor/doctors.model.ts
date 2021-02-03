import { IUserCommonParsed, IUserCommonPayload, IUserCommonRaw } from '@shared/models/users.model';

export interface IDoctorInfoPayload {
  name: string;
  certifications: number[], // [0, 14, 15] // for names check IDoctor
  specialties: number[], // [0, 14, 25] // for names check IDoctor
  experienceSince: string, // "2021-01-15T21:39:51.835Z"
}

export interface IDoctorInfoRaw extends IDoctorInfoPayload {

  // dynamically calculated/evaluated from BE, not from DB.
  totalContracts: number,
  totalSaleAmount: number,
}

export interface IDoctorPayload extends IUserCommonPayload {
  contacts: number[] // [123456789, 123456789]
  doctorInfo: IDoctorInfoPayload,
}

export interface IDoctorRaw extends IUserCommonRaw {
  contacts: number[] // [123456789, 123456789]
  doctorInfo: IDoctorInfoRaw,
}

// register custom added fields here
export interface IDoctorParsed extends IDoctorRaw, IUserCommonParsed {

  // copying from nested "doctorInfo" to root.
  name: string;
  experienceSince: string;
  totalContracts: number;
  totalSaleAmount: number;

  customContacts: string; // join number1 <br> number2 using doctor.contacts

  customCertificationsNames: string; // MBBS, FCPS, MCPS, BDS(Dentist), Other etc.
  customSpecialtiesNames: string; // 'Gyno', 'General Physcian', 'diabetes'
  customExperienceYears: string; // 10 years, calculate from doctorInfo.experienceSinceYear
}
