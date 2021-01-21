
import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IProductRaw {
  // comes in payload
  companyId: number; // "company.id"
  packInfo: string;
  name: string;
  generic: string;
  mrp: number; // for customers
  net: number; // for distributions
  boxQuantity: number;

  // optional
  batchNumber?: string;
  type?: string;

  // to be generated on server
  id: number;
  createdOn: string; // (new Date()).toISOString(); // "2021-01-15T21:39:51.835Z"
  createdBy: number; // id of user/admin
  lastUpdatedOn: string;
  lastUpdatedBy: number; // id of user/admin

  // for GET only. dynamically calculated fields from BE.
  // ...
}
// custom generated fields here.
export interface IProductParsed extends IProductRaw {
  customTP: number; // for stores 15%
  customDiscountPercent: number; // converted from net amount to % for distribution
  customCompanyName: string;
}

export interface IAddUpdateSearchProductConfig {
  mode: ECRUDModalModes;
  product: IProductParsed | null;
}

export interface IGetAllProductsSuccessData {
  products: IProductRaw[],
  totalCount: number,
}

export interface IAddUpdateProductSuccessData {
  product: IProductRaw,
}
