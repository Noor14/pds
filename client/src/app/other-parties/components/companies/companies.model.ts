
export interface ICompanyRaw {
  id: string;
  name: string;
  type: number;
  totalProducts: number;
  totalOrders: number;
  totalAmount: number;
  startedSince: string;
  contact: string;

  // these will need to be added into every collection, every model of DB.
  createdOn: string; // (new Date()).toISOString(); // "2021-01-15T21:39:51.835Z"
  createdBy: string; // id of user/admin
  updatedOn: string;
  updatedBy: string; // id of user/admin
}

export interface ICompany extends ICompanyRaw {

}
