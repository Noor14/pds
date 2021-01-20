import { ECRUDModalModes } from '@shared/models/modals.model';
export { ECRUDModalModes };

export interface IContractRaw {
  id: string;
  doctorId: number;
  statusType: number;

  totalSaleAmount: number;
  durationDays: number;
  startDate: string;
  endDate: string;


  createdOn: string; // can be used as "Pending" state on, and by.
  createdBy: number;
  lastUpdatedOn: string;
  lastUpdatedBy: number;
}

// custom generated fields here.
export interface IContractParsed extends IContractRaw {
  customDoctorName: string;
  customDoctorContact: string;
}

export interface IAddUpdateSearchContractConfig {
  mode: ECRUDModalModes;
  contract: IContractParsed | null;
}

export interface IGetAllContractsSuccessData {
  contracts: IContractRaw[],
  totalCount: number,
}

export interface IAddUpdateContractSuccessData {
  contract: IContractRaw,
}
