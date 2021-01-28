import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../../services/store.service';
import {
  ECRUDModalModes,
  IAddUpdateSearchStoreConfig,
  IStoreParsed,
  IStorePayload,
  IStoreRaw
} from '../../stores.model';
import { UtilService } from '@shared/services/util.service';
import { IChoices, IPersonRaw } from '@shared/models/general.model';
import { ICompanyParsed } from '@root/app/companies/companies.model';
import { IAreaParsed } from '@root/app/areas/areas.model';
import { AreaService } from '@root/app/areas/services/area.service';

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

  storeMode: ECRUDModalModes = ECRUDModalModes.Add;

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    this.storeMode = mode;
    return this.titles[mode];
  }

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  data: IStorePayload = {
    // persons: [{type: 0, firstName: '', lastName: '', phone: []}], // name <br> phone, name <br> phone. we may add roles as well.
    name: '',
    areaId: 0,
    address: ''
  };

  choices: IChoices = {
    areas: []
  };

  get storeId() : number { return this.config && this.config.store && this.config.store.id || 0 };

  responseMessages = {
    success: {
      add: 'Store has been added successfully.',
      update: 'Store has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding Store !',
      update: 'Failed in updating Store !',
    },
  };

  constructor(
    public bsModalRef: BsModalRef,
    public storeService: StoreService,
    public areaService: AreaService,
    public utilService: UtilService
) { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.config && this.config.store) {
        this.data = this.utilService.deepCopyObject(this.config.store);
        console.log(this.data);
      }
    });

    // load companies for dropdown choices
    this.areaService.apiGetList({})
      .subscribe((res: { areas: IAreaParsed[] }) => {
        this.choices.areas = res.areas;
        console.log(res);
      });
  }

  renderProductToEdit() {
    if (this.config && this.config.store) {
      this.data = this.utilService.deepCopyObject(this.config.store);
    }
  }

  resetForm(): void {
    console.log('resetForm:');

    this.renderProductToEdit();
    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string): void {
    console.log('resetFormStatus:');

    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  submitForm(form: any): any {
    console.log('submitForm:');

    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');

    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addStore();
        break;
      case ECRUDModalModes.Edit:
        this.updateStore();
        break;
    }
  }

  addStore() {
    this.storeService.apiAddOne(this.data)
      .subscribe((res: { store: IStoreParsed }) => {
          console.log('add store : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile(res.store);
        },
        (reason: any) => {
          console.log('add store : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });

  }

  updateStore() {
    this.storeService.apiUpdateOne(this.storeId, this.data)
      .subscribe((res: { store: IStoreParsed }) => {
          console.log('updated store : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile(res.store);
        },
        (res: any) => {
          console.log('updated store : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile(store: IStoreParsed) {
    this.result.emit(store);
    setTimeout(this.bsModalRef.hide, 3000);
  }


  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
