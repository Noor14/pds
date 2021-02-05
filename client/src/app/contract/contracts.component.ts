import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '@shared/components/table/table.model';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';
import { ContractModalsService } from '@root/app/contract/services/contract-modals.service';
import { UtilService } from '@shared/services/util.service';
import { ContractService } from '@root/app/contract/services/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  rows = [
    { id: '0000101', status: 'Completed', contractByName: 'Dr. Yameen', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 40,235', contractByContact: '+923001234567'},
    { id: '0000102', status: 'In Progress', contractByName: 'Dr. Abu Bakar', startDate: '04/Feb/2021', endDate: '08/Apr/2021', duration: 2, totalAmount: 'Rs. 10,800', contractByContact: '+92333199999'},
    { id: '0000103', status: 'In Progress', contractByName: 'Dr. Yousuf', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 1,42,000', contractByContact: '+923021234500'},
    { id: '0000104', status: 'Completed', contractByName: 'Dr. Rutba', startDate: '06/Feb/2021', endDate: '11/Apr/2021', duration: 2, totalAmount: 'Rs. 2,00,000', contractByContact: '+92300177777'},
    { id: '0000105', status: 'Completed', contractByName: 'Dr. Ali Imtiaz', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 3,20,000', contractByContact: '+923001234567'},
    { id: '0000106', status: 'In Progress', contractByName: 'Dr. Momina Sundas', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 15,000', contractByContact: '+92344123998035'},
  ];
  columns = [
    { name: 'Contract ID', prop: 'id'},
    { name: 'Doctor Name', prop: 'contractByName'},
    { name: 'Status', prop: 'status'},
    { name: 'Amount', prop: 'totalAmount'},
    { name: 'Duration (months)', prop: 'duration'},
    { name: 'Start Date', prop: 'startDate'},
    { name: 'End Date', prop: 'endDate'},
    { name: 'Doctor\'s Contact', prop: 'contractByContact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editContract.bind(this)},
    { name: 'Delete', handler: this.deleteContract.bind(this)},
  ];
  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'New Contract',
      handler: this.addContract.bind(this),
    }
  };

  constructor(
    private contractService: ContractService,
    private contractModalsService: ContractModalsService,
    private utilService: UtilService) { }

  ngOnInit(): void {
  }

  addContract(): void {
    console.log('addContract:');
    this.contractModalsService.openAddContract()
      .subscribe((res: any) => {
        console.log('editContract: success', res);
      });
  }

  editContract(contract: any, contractIdx: number): void {
    console.log('editContract:', contractIdx, contract);

    this.contractModalsService.openEditContract(contract)
      .subscribe((res: any) => {
        console.log('editContract: success', res);
      });
  }

  deleteContract(contract: any, contractIdx: number): void {
    console.log('deleteContract:', contractIdx, contract);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this contract from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: prompt: approve', res);

        this.contractService.apiDeleteOne(contract.id)
          .subscribe((res: any) => {
            console.log('deleteContract: success', res);

            this.utilService.alert({
              isError: false,
              headingText: 'Done !',
              message: 'Contract has been removed successfully.',
              approveButtonText: 'OK'
            });

          }, (reason: string) => {
            console.log('deleteContract: failed', res);

            this.utilService.alert({
              isError: true,
              headingText: '',
              message: 'Contract could not be deleted.',
              approveButtonText: 'OK'
            });
          });

      }, (reason: string) => {
        console.log('confirm: prompt: decline');
      });
  }

}
