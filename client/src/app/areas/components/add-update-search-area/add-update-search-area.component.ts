import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes, IAddUpdateSearchAreaConfig } from '../../areas.model';

@Component({
  selector: 'app-add-update-search-area',
  templateUrl: './add-update-search-area.component.html',
  styleUrls: ['./add-update-search-area.component.scss']
})
export class AddUpdateSearchAreaComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchAreaConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add Area',
    [ECRUDModalModes.Edit]: 'Edit Area',
    [ECRUDModalModes.Search]: 'Search Area',
    [ECRUDModalModes.ReadOnly]: 'View Area',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  // data: IAreaRaw = {;
  data = {
    name: '',
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm() {
    console.log('submitForm:');
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
