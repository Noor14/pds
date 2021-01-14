import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes }

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

export interface IAddUpdateSearchOrderConfig {
  mode: ECRUDModalModes;
  order: IOrder | null;
}

