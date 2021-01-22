import { ECRUDModalModes } from '@shared/models/modals.model';
import { IProductRaw } from '@root/app/product/products.model';

export { ECRUDModalModes };

export interface IOrderRaw {
  // comes in payload
  storeId: number; // against which the order is made.
  productsSnapshot: IProductRaw[]; // at the time of order, snapshot/copies of products objects.

  tpPercent?: number; // only admin can send, otherwise server generates it as default from vertical settings, e.g. 15

  // to be generated on server
  id: number;
  status: number; // 1, 2, 3
  createdOn: string; // can be used as "Pending" state on, and by.
  createdBy: number;
  lastUpdatedOn: string;
  lastUpdatedBy: number;

  // status related info
  approvedOn: string;
  approvedBy: number;
  inProgressOn: string;
  inProgressBy: number;
  completedOn: string;
  completedBy: number;
}

// custom generated fields here.
export interface IOrderParsed extends IOrderRaw {
  customStoreName: string;
  customStatus: string;
  customStoreContact: string;
}

export interface IAddUpdateSearchOrderConfig {
  mode: ECRUDModalModes;
  order: IOrderParsed | null;
}

export interface IGetAllOrdersSuccessData {
  orders: IOrderRaw[],
  totalCount: number,
}

export interface IAddUpdateOrderSuccessData {
  order: IOrderRaw,
}
