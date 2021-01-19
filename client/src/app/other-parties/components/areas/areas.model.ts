import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IAreaRaw {
  id: number,
  name: string,
  cityId: number, // 1001 for all for now. only 1 city.

  createdOn: string;
  createdBy: number;
  lastUpdatedOn: string;
  lastUpdatedBy: number;

  // dynamically generated/calculated fields.
  totalStores: number,
  totalDoctors: number,
  totalContracts: number,
  totalActiveContracts: number,
  totalOrders: number,
  totalSale: number,
}

// custom generated fields here.
export interface IAreaParsed extends IAreaRaw {

}

export interface IAddUpdateSearchAreaConfig {
  mode: ECRUDModalModes;
  area: IAreaParsed | null;
}

export interface IGetAllAreasSuccessData {
  areas: IAreaRaw[],
  totalCount: number,
}

