
export interface ICompanyRaw {
  id: string,
  name: string,
  type: number,
  totalProducts: number,
  totalOrders: number,
  totalAmount: number,
  startedSince: string,
  contact: string,
}

export interface ICompany extends ICompanyRaw {

}
