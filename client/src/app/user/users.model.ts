import { ECRUDModalModes } from '@shared/models/modals.model';
import { IUserCommonParsed, IUserCommonRaw } from '@shared/models/users.model';
import { IPersonRaw } from '@shared/models/general.model';

export { ECRUDModalModes };

export interface IUserPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  city: string;
  status: string
  role: string;
  contact: string;
}

export interface IUserRaw extends IUserCommonRaw {
  userInfo: {
    name: string; // e.g. "Al-Madina Pharmacy"
    persons: IPersonRaw[];
  },
}

// custom generated fields here
export interface IUserParsed extends IUserCommonParsed, IUserRaw {
  customPersons: string; // name <br> phone, name <br> phone. we may add roles as well.

  // copying from nested to root.
  customFullName: string;
  customeType: string,
  customUserRole: string,
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
