import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface ICompaniesRaw {
  id: string;
  name: string;
  type: string;
  contact: string;
  person: number;
}

export interface IGetAllCompanySuccessData {
  companies: ICompaniesRaw[];
  totalCount: number;
}

export interface IGetAllCompanySuccessData {
  company: ICompaniesRaw;
}
