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

  mrp: number;
  net: number;
  boxQuantity: number;
  // [prop: string] : any;
}

export interface IProduct extends IProductRaw {
  tp: number;
  discountPercent: number;
  companyName: string;
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
