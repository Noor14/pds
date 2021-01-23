import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes, IAddUpdateSearchAreaConfig, IAreaPayload, IAreaParsed,
  IAreaRaw } from '../../areas.model';
import { UtilService } from '@shared/services/util.service';
import { AreaService } from '@root/app/areas/services/area.service';
import { IChoices } from '@shared/models/general.model';
// import { areaTypes } from '@root/app/areas/areas.constant';

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

  // @ts-ignore
  // @ts-ignore
  choices: IChoices = {
    // areaTypes: areaTypes,
    areas: [],
  };
  cities = [];


  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  get areaId() : number { return this.config && this.config.area && this.config.area.id || 0 };

  // data: IAreaRaw = {;
  data: IAreaPayload = {
    name: ''
  };

  responseMessages = {
    success: {
      add: 'Area has been added successfully.',
      update: 'Area has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding Area !',
      update: 'Failed in updating Area !',
    },
  };

  constructor(
    public bsModalRef: BsModalRef,
    public utilService: UtilService,
    public areaService: AreaService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      if (this.config && this.config.area) {
        this.data = this.utilService.deepCopyObject(this.config.area);
      }
    });

    // load areas for dropdown choices
    this.areaService.apiGetList({})
      .subscribe((res: { areas: IAreaParsed[] }) => {
        // this.choices.areas = res.areas;
        console.log(res);
      });
  }

  renderProductToEdit() {
    if (this.config && this.config.area) {
      this.data = this.utilService.deepCopyObject(this.config.area);
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
        this.addArea();
        break;
      case ECRUDModalModes.Edit:
        this.updateArea();
        break;
    }
  }

  addArea() {
    this.areaService.apiAddOne(this.data)
      .subscribe((res: { area: IAreaParsed }) => {
          console.log('add area : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile(res.area);
        },
        (reason: any) => {
          console.log('add area : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });

  }

  updateArea() {
    this.areaService.apiUpdateOne(this.areaId, this.data)
      .subscribe((res: { area: IAreaParsed }) => {
          console.log('updated area : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile(res.area);
        },
        (res: any) => {
          console.log('updated area : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile(area: IAreaParsed) {
    this.result.emit(area);
    setTimeout(this.bsModalRef.hide, 3000);
  }


  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
