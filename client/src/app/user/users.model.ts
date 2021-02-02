import { ECRUDModalModes } from '@shared/models/modals.model';
import { IUserCommonParsed, IUserCommonRaw } from '@shared/models/users.model';
import { IPersonRaw } from '@shared/models/general.model';

export { ECRUDModalModes };

export interface IUserRaw {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  address: string;
  city: string;
  status: string
  role: string;
  contact: string;
}

// custom generated fields here
export interface IUserParsed extends IUserCommonParsed, IUserRaw {
  username: string;
}

export interface IAddUpdateSearchUserConfig {
  mode: ECRUDModalModes;
  user: IUserParsed | null;
}

export interface IGetAllUsersSuccessData {
  users: IUserRaw[],
  totalCount: number,
}

export interface IAddUserSuccessData {
  user: IUserRaw,
}
