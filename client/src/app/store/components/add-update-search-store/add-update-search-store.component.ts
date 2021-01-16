import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../../services/store.service';
import { ECRUDModalModes, IAddUpdateSearchStoreConfig } from '../../../store/store.model';

@Component({
  selector: 'app-add-update-search-store',
  templateUrl: './add-update-search-store.component.html',
  styleUrls: ['./add-update-search-store.component.scss']
})

export class AddUpdateSearchStoreComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchStoreConfig | undefined;
  private titles = {
    [ECRUDModalModes.Add]: 'Add Store',
    [ECRUDModalModes.Edit]: 'Edit Store',
    [ECRUDModalModes.Search]: 'Search Store',
    [ECRUDModalModes.ReadOnly]: 'View Store',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  productTypes = [];
  companies = [];

  // data: IProductRaw = {;
  data = {
    id: '',
    batchNumber: '',
    packInfo: '',
    name: '',
    generic: '',

    type: undefined,
    companyId: undefined,
    tp: undefined,
    mrp: undefined,
    net: undefined,
    boxQuantity: undefined,
  };

  constructor(
    public bsModalRef: BsModalRef,
    public storeService: StoreService
  ) { }

  ngOnInit(): void {}

  closeModal() {
    this.bsModalRef.hide();
  }

}
