import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes }

export interface IProductRaw {
  id: string;
  batchNumber: string;
  packInfo: string;
  name: string;
  generic: string;
  type: number;
  companyId: number;

  tp: number;
  mrp: number;
  net: number;
  boxQuantity: number;
  // [prop: string] : any;
}

export interface IProduct extends IProductRaw {
  companyName: string;
  discountPercent: number;
  [prop: string]: any;
}

export interface IAddUpdateSearchProductConfig {
  mode: ECRUDModalModes;
  product: IProduct | null;
}

export interface IProductResponseSuccess {
  data: {
    products: IProductRaw[],
    totalCount: number,
  };
}
