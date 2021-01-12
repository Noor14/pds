
export interface IOrderRaw {
  id: number;
  store: string;
  name: string;
  amount: number;
  status: number;
  date: string;
  contact: number;
}

export interface IOrder extends IOrderRaw {
  companyName: string;
  discountPercent: number;
  [prop: string]: any;
}

export enum EOrderModalModes {
  Add,
  Edit,
  Search,
  ReadOnly
}

export interface IAddUpdateSearchOrderConfig {
  mode: EOrderModalModes;
  order: IOrder | null;
}

export interface IOrderResponseSuccess {
  data: {
    orders: IOrder[],
    totalCount: number,
  };
}
