import { ECRUDModalModes } from '@shared/models/modals.model';
import { IProductRaw } from '@root/app/product/products.model';

export { ECRUDModalModes };

export interface IOrderRaw {
  id: number;
  status: number; // 1, 2, 3
  storeId: number; // against which the order is made.

  productsSnapshot: IProductRaw[]; // at the time of order, snapshot/copies of products objects.

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
  companyName: string;
  discountPercent: number;
  [prop: string]: any;
}

export interface IAddUpdateSearchOrderConfig {
  mode: ECRUDModalModes;
  order: IOrderParsed | null;
}

export interface IGetAllOrdersSuccessData {
  orders: IOrderRaw[],
  totalCount: number,
}
