
export interface IEnvironment {
  production: boolean;

  apiBaseURL: string;
  thirdParties: {
    googleMapAPIKey?: string;
  }
}
