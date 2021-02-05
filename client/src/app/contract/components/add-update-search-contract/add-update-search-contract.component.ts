import { Component, EventEmitter, OnInit } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchContractConfig, IContractRaw } from '@root/app/contract/contracts.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from '@shared/services/util.service';
import { ContractService } from '@root/app/contract/services/contract.service';
// import { contractList } from '@root/app/contract/contracts.constant';

@Component({
  selector: 'app-add-update-search-contract',
  templateUrl: './add-update-search-contract.component.html',
  styleUrls: ['./add-update-search-contract.component.scss']
})
export class AddUpdateSearchContractComponent implements OnInit {

  public result = new EventEmitter();
  public config: IAddUpdateSearchContractConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add Contract',
    [ECRUDModalModes.Edit]: 'Edit Contract',
    [ECRUDModalModes.Search]: 'Search Contract',
    [ECRUDModalModes.ReadOnly]: 'View Contract',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  doctors = [
    {id: 10001, name: ''}
  ];
  responseMessages = {
    success: {
      add: 'Contract has been added successfully.',
      update: 'Contract has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding contract !',
      update: 'Failed in updating contract !',
    },
  };

  data: any = {
    id: '',
    doctorName: '',
    status: '',
    amount: '',
    duration: '',

    startDate: undefined,
    endDate: undefined,
    doctorsContact: undefined,
  };

  constructor(
    public bsModalRef: BsModalRef,
    public utilService: UtilService,
    public contractService: ContractService
  ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.renderContractToEdit();
    });
  }

  renderContractToEdit() {
    console.log('this.config', this.config)
    if (this.config && this.config.contract) {
      this.data = this.utilService.deepCopyObject(this.config.contract);
    }
  }

  resetForm(): void {
    console.log('resetForm:');
    this.renderContractToEdit();
    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string) {
    console.log('resetFormStatus:');
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  submitForm(form: any): void {

    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');

    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addContract(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateContract(this.data);
        break;
    }
  }

  addContract(contract: IContractRaw): void {
    this.contractService.apiAddOne(contract)
      .subscribe((res: any) => {
          console.log('add contract : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add contract : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });
  }

  updateContract(contract: IContractRaw): void {
    this.contractService.apiUpdateOne(contract)
      .subscribe((res: any) => {
          console.log('updated contract : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated contract : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile() {
    setTimeout(this.bsModalRef.hide, 3000);
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }


}
