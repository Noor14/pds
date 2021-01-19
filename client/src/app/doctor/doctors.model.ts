import { ISystemUserParsed, IUserCommonParsed } from '@shared/models/users.model';

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
  customContacts: string; // join number1 <br> number2 using doctor.contacts
}
