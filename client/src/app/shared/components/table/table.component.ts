import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

interface IAction {
  name: string;
  handler: Function;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() contextPrefix: string = 'table'; // to be used for form fields name prefixes.
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() actions: IAction[] = [];
  @Input() scrollbarH = true;
  @Input() scrollbarV = false; // gives error for rowHeight Auto

  // @Input() columnMode = ColumnMode.flex;
  @Input() columnMode = ColumnMode.standard;
  @Input() suppressSwitchColumnMode = false;

  // @ViewChild('table', { read: ElementRef, static: true }) table: ElementRef;
  // @ViewChild('table', { static: true }) tableRef: DatatableComponent;

  /* defaults */
  public limit = 10;

  public isLargeScreenScreenView = false;
  public filterByObj = {
    column: '$',
    text: undefined,
  };
  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // auto adjust the column mode based of the screen.
    // i.e. flex for large devices, and standard for smaller ones, with scroll.
    if (!this.suppressSwitchColumnMode) {
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
