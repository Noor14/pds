import { ECRUDModalModes } from '@shared/models/modals.model';
import { IUserCommonParsed, IUserCommonRaw } from '@shared/models/users.model';
import { IPersonRaw } from '@shared/models/general.model';

export { ECRUDModalModes };


export interface IStoreRaw extends IUserCommonRaw {
  storeInfo: {
    name: string; // e.g. "Al-Madina Pharmacy"
    persons: IPersonRaw[];

    // dynamically calculated/evaluated from BE, not from DB.
    totalSaleAmount: number,
    totalOrders: number,
  },
}

// custom generated fields here
export interface IStoreParsed extends IUserCommonParsed, IStoreRaw {
  customPersons: string; // name <br> phone, name <br> phone. we may add roles as well.
}


export interface IAddUpdateSearchStoreConfig {
  mode: ECRUDModalModes;
  store: IStoreParsed | null;
}

export interface IGetAllStoresSuccessData {
  store: IStoreRaw[],
  totalCount: number,
}
