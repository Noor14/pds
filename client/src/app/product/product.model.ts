import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IProductRaw {
  id: string;
  batchNumber: string;
  packInfo: string;
  name: string;
  generic: string;
  type: number;
  companyId: number;

  mrp: number; // for customers
  net: number; // for distributions
  boxQuantity: number;
  // [prop: string] : any;
}

export interface IProduct extends IProductRaw {
  tp: number; // for stores 15%
  discountPercent: number; // converted from net amount to % for distribution
  companyName: string;
  [prop: string]: any;
}

export interface IAddUpdateSearchProductConfig {
  mode: ECRUDModalModes;
  product: IProduct | null;
}

export interface IGetAllProductsSuccessData {
  products: IProductRaw[],
  totalCount: number,
}

export interface IAddProductSuccessData {
  product: IProductRaw,
}
