import { ECRUDModalModes } from '@shared/models/modals.model';
import { IUserCommonParsed, IUserCommonPayload, IUserCommonRaw } from '@shared/models/users.model';
import { IPersonRaw } from '@shared/models/general.model';

export { ECRUDModalModes };

export interface IStoreInfoPayload {
  name: string; // e.g. "Al-Madina Pharmacy"
  persons: IPersonRaw[];
}

export interface IStoreInfoRaw extends IStoreInfoPayload {

  // dynamically calculated/evaluated from BE, not from DB.
  totalSaleAmount: number,
  totalOrders: number,
}

export interface IStorePayload extends IUserCommonPayload {
  storeInfo: IStoreInfoPayload;
}

export interface IStoreRaw extends IUserCommonRaw {
  storeInfo: IStoreInfoRaw;
}

// custom generated fields here
export interface IStoreParsed extends IStoreRaw, IUserCommonParsed {

  // copying from nested "storeInfo" to root.
  name: string;
  totalSaleAmount: number,
  totalOrders: number,

  customPersons: string; // name <br> phone, name <br> phone. we may add roles as well.
}


export interface IAddUpdateSearchStoreConfig {
  mode: ECRUDModalModes;
  store: IStoreParsed | null;
}

export interface IGetAllStoresSuccessData {
  stores: IStoreRaw[],
  totalCount: number,
}

export interface IAddStoreSuccessData {
  store: IStoreRaw,
}
