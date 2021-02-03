import { ECRUDModalModes } from '@shared/models/modals.model';
import { IUserCommonParsed, IUserCommonPayload, IUserCommonRaw } from '@shared/models/users.model';

export { ECRUDModalModes };


export interface ITeamUserPayload extends IUserCommonPayload {
  firstName: string;
  lastName: string;
  password: string;

  contacts: number[] // [123456789, 123456789]
}

export interface ITeamUserRaw extends ITeamUserPayload, IUserCommonRaw {

}

export interface ITeamUserParsed extends ITeamUserRaw, IUserCommonParsed {
  customFullName: string;
  customContacts: string;
  // other info like assignedTo, assignedBy, etc.
}


export interface IAddUpdateSearchTeamUserConfig {
  mode: ECRUDModalModes;
  user: ITeamUserParsed | null;
}

export interface IGetAllUsersSuccessData {
  users: ITeamUserRaw[],
  totalCount: number,
}

export interface IAddUserSuccessData {
  user: ITeamUserRaw,
}
