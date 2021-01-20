
export interface ITableButton {
  buttonText: string;
  handler: Function;
}

export interface ITableConfig {
  suppressSwitchColumnMode?: boolean;
  advanceSearchItem?: ITableButton;
  addItem?: ITableButton;
}
