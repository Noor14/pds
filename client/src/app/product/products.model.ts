
import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IProductRaw {
  id: string;
  companyId: number;

  type: number;
  batchNumber: string;
  packInfo: string;
  name: string;
  generic: string;

  mrp: number; // for customers
  net: number; // for distributions
  boxQuantity: number;
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
