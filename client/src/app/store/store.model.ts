import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IStoreRaw {
  id: string;
  name: string;
  city: string;
  memberSince: string;
  generic: string;
  contact: string;
  totalOrder: number;
  totalAmount: number;
}

export interface IStore extends IStoreRaw {
  companyName: string;
  discountPercent: number;
  [prop: string]: any;
}


export interface IAddUpdateSearchStoreConfig {
  mode: ECRUDModalModes;
  store: IStore | null;
}

export interface IStoreResponseSuccess {
  data: {
    store: IStoreRaw[],
    totalCount: number,
  };
}
