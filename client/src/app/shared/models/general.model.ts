
// used for stores etc.
import { IStoreParsed } from '@root/app/store/stores.model';
import { ICompanyParsed } from '@root/app/companies/companies.model';
import { IAreaParsed } from '@root/app/areas/areas.model';

export interface IPersonRaw {
  type: number; // sales person, Manager, Owner
  firstName: string;
  lastName: string;
  phone: number[]; // [923002586497, 923452586450]
}

export interface IChoices {
  stores?: IStoreParsed[],
  companies?: ICompanyParsed[],
  areas?: IAreaParsed[],

  companyTypes?: string[],
  productTypes?: string[],
  statusTypes?: string[], // for orders
  personTypes?: string[], // for companies
}
