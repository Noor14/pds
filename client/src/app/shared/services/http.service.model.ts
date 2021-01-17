
export interface IHttpMethodQueryParams {
  [prop: string]: string | string[];
}

export interface IHttpAPIResponse {
  success: boolean;
  data: any;
}
