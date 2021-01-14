import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IAreaRaw {
  id: string,
  name: string,
  cityId: string,
  totalStores: number,
  totalDoctors: number,
  totalContracts: number,
  totalActiveContracts: number,
  totalOrders: number,
  totalSale: number,
}

export interface IArea extends IAreaRaw {

}

export interface IAddUpdateSearchAreaConfig {
  mode: ECRUDModalModes;
  area: IArea | null;
}

export interface IAreaResponseSuccess {
  data: {
    areas: IAreaRaw[],
    totalCount: number,
  };
}

