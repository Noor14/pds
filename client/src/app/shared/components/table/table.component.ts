import { Component, OnInit, Input } from '@angular/core';

interface IAction {
  name: string;
  handler: Function;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() actions: IAction[] = [];

  /* defaults */
  public limit = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
