
export interface ITableButton {
  buttonText: string;
  handler: Function;
}

export interface ITableConfig {
  advanceSearchItem?: ITableButton;
  addItem?: ITableButton;
}
