import { IPersonRaw } from '@shared/models/general.model';
import { ECRUDModalModes } from '@shared/models/modals.model';

export { ECRUDModalModes }

export interface ICompanyPayload {
  name: string;
  type: number;
  persons: IPersonRaw[];
}

export interface ICompanyRaw extends ICompanyPayload {

  // to be generated on server
  id: number;
  createdOn: string; // (new Date()).toISOString(); // "2021-01-15T21:39:51.835Z"
  createdBy: number; // id of team/admin
  lastUpdatedOn: string;
  lastUpdatedBy: number; // id of team/admin

  // for GET only. dynamically calculated fields from BE.
  totalProducts: number;
  totalOrders: number;
  totalAmount: number;
}

// custom generated fields here.
export interface ICompanyParsed extends ICompanyRaw {
  customPersons: string;
  customType: string;
}

export interface IAddUpdateSearchCompanyConfig {
  mode: ECRUDModalModes;
  company: ICompanyParsed | null;
}

export interface IGetAllCompaniesSuccessData {
  companies: ICompanyRaw[],
  totalCount: number,
}

export interface IAddCompanySuccessData {
  company: ICompanyRaw,
}

