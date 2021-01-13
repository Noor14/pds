
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

export enum EProductModalModes {
  Add,
  Edit,
  Search,
  ReadOnly
}

export interface IAddUpdateSearchProductConfig {
  mode: EProductModalModes;
  product: IProduct | null;
}

export interface IProductResponseSuccess {
  data: {
    products: IProductRaw[],
    totalCount: number,
  };
}
