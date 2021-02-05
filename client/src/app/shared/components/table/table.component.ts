import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges
} from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ITableConfig } from '@shared/components/table/table.model';
import { CurrencyPipe } from '@angular/common';

interface IAction {
  name: string;
  handler: Function;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent
  // @ViewChild(DatatableComponent) table: DatatableComponent;
  // @ViewChild('table', { read: ElementRef, static: true }) table: ElementRef;
  // @ViewChild('table', { static: true }) tableRef: DatatableComponent;
  // @ViewChild('table', { static: true }) tableRef: DatatableComponent;

  @Input() contextPrefix: string = 'table'; // to be used for form fields name prefixes.
  @Input() config: ITableConfig | undefined = undefined;

  @Input() rows: any[] = [];
  @Input() currencyFilterProp?: any[] = [];
  @Input() columns: any[] = [];
  @Input() actions: IAction[] = [];
  @Input() messages: { [prop: string]: string } = {
    emptyMessage: 'No records found.',
  };

  // @Input() scrollbarH = true;
  @Input() scrollbarH = false;
  @Input() scrollbarV = false; // gives error for rowHeight Auto

  // @Input() columnMode = ColumnMode.flex;
  @Input() columnMode = ColumnMode.standard;

  // @ViewChild('table', { read: ElementRef, static: true }) table: ElementRef;
  // @ViewChild('table', { static: true }) tableRef: DatatableComponent;

  rowsBackup: any[] = [];

  /* defaults */
  public limit = 10;
  public isLargeScreenScreenView = false;
  public filterByObj = {
    column: '$',
    text: '',
  };
  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    if (this.currencyFilterProp && this.currencyFilterProp.length > 0) {
      this.currencyFilterProp.forEach((property) => {
        if (!property) return;
        this.rows.forEach((row) => {
          row[property] = this.formatCurrency(row[property]);
        });
      })
    }
  }

  ngOnChanges() {
    // console.log('ngOnChanges:');
    // this.rowsBackup = this.rows;
    this.rowsBackup = [...this.rows];
  }

  formatCurrency(price: number | string) {
    return price == 0 ? 'Rs 0.00' : new CurrencyPipe('en-US').transform(price, 'Rs ', 'code');
  }

  onFilterChange() {
    // console.log('onFilterChange:');
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;

    const searchString = this.filterByObj.text.toLowerCase();

    // case: no value or just cleared filter
    if (!searchString) {
      this.rows = this.rowsBackup;
      return;
    }

    // case: all columns
    if (this.filterByObj.column === '$') {
      this.rows = this.rowsBackup.filter(row => {
        return this.columns.some(column => {
          return row[column.prop] && (row[column.prop] + '').toLowerCase().indexOf(searchString) !== -1;
        });
      });
      return;
    }

    // case: selected column
    this.rows = this.rowsBackup.filter(row => {
      // console.log(row[this.filterByObj.column], typeof row[this.filterByObj.column]);
      return row[this.filterByObj.column] && (row[this.filterByObj.column] + '').toLowerCase().indexOf(searchString) !== -1;
    });
  }

  ngAfterViewInit() {
    // auto adjust the column mode based of the screen.
    // i.e. flex for large devices, and standard for smaller ones, with scroll.
    if (!this.config || !this.config.suppressSwitchColumnMode) {
      window.addEventListener('resize', this.onWindowResize);
      this.checkForSwitchColumnMode();
    }
  }

  checkForSwitchColumnMode() {
    // console.log('checkForSwitchColumnMode');
    this.isLargeScreenScreenView = window.innerWidth > 800;

    if (this.isLargeScreenScreenView) {
      if (this.columnMode !== ColumnMode.flex) {
        this.columnMode = ColumnMode.flex;
        this.scrollbarH = false;
        this.rows = [...this.rows];
        this.cdRef.detectChanges();
        // this.tableRef.recalculate();
      }
    } else {
      if (this.columnMode !== ColumnMode.standard) {
        this.columnMode = ColumnMode.standard;
        this.scrollbarH = true;
        this.rows = [...this.rows];
        this.cdRef.detectChanges();
        // this.tableRef.recalculate();
      }
    }
  }

  onWindowResize = () =>  {
    // console.log('onWindowResize:');
    this.checkForSwitchColumnMode();
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  }

}
