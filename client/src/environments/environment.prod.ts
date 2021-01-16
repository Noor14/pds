import { IEnvironment } from './environment.model';
import { environmentCommon } from './environment.common';

export const environment: IEnvironment = { ...environmentCommon, ...{
    production: true,

    apiBaseURL: 'https://www.qaswads.herokuapp.com/api',
  }
};
