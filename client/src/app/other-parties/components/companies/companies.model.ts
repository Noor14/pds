import { IPersonRaw } from '@shared/models/general.model';
import { ECRUDModalModes } from '@shared/models/modals.model';

export { ECRUDModalModes }

export interface ICompanyRaw {
  id: number;
  name: string;
  type: number;
  startedSince: string;
  persons: IPersonRaw[];

  // dynamically generated / calculated fields.
  totalProducts: number;
  totalOrders: number;
  totalAmount: number;

  // these will need to be added into every collection, every model of DB.
  createdOn: string; // (new Date()).toISOString(); // "2021-01-15T21:39:51.835Z"
  createdBy: number; // id of user/admin
  lastUpdatedOn: string;
  lastUpdatedBy: number; // id of user/admin
}

// custom generated fields here.
export interface ICompanyParsed extends ICompanyRaw {
  customPersons: string;
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

