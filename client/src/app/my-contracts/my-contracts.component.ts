import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '@shared/components/table/table.model';
import { ContractService } from '@root/app/contract/services/contract.service';
import { ContractModalsService } from '@root/app/contract/services/contract-modals.service';
import { IConfirmConfig, UtilService } from '@shared/services/util.service';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.component.html',
  styleUrls: ['./my-contracts.component.scss']
})
export class MyContractsComponent implements OnInit {
  rows = [
    { id: '0000101', status: 'Pending', contractByName: 'Bismillah Medical Store', contractedOn: '04:30PM 01/Feb/2021', contractAmount: 'Rs. 40,235', contractByContact: '+923001234567'},
    { id: '0000102', status: 'In Progress', contractByName: 'Ahmed Pharmacy', contractedOn: '03:30PM 01/Feb/2021', contractAmount: 'Rs. 10,800', contractByContact: '+92333199999'},
    { id: '0000103', status: 'In Progress', contractByName: 'Rutba Medical Complex', contractedOn: '02:00PM 01/Feb/2021', contractAmount: 'Rs. 1,42,000', contractByContact: '+923021234500'},
    { id: '0000104', status: 'Processed', contractByName: 'Boraak Pharmacy', contractedOn: '01:30PM 01/Feb/2021', contractAmount: 'Rs. 2,00,000', contractByContact: '+92300177777'},
    { id: '0000105', status: 'Pending', contractByName: 'Yaqoob Medical', contractedOn: '01:00PM 01/Feb/2021', contractAmount: 'Rs. 3,20,000', contractByContact: '+923001234567'},
    { id: '0000106', status: 'Processed', contractByName: 'Pakistan Medical', contractedOn: '11:00AM 01/Feb/2021', contractAmount: 'Rs. 15,000', contractByContact: '+92344123998035'},
  ];
  columns = [
    { name: 'Contract ID', prop: 'id'},
    { name: 'contract', prop: 'contractByName'},
    { name: 'Status', prop: 'status'},
    { name: 'Amount', prop: 'contractAmount'},
    { name: 'Contracted On', prop: 'contractedOn'},
    { name: 'Contact', prop: 'contractByContact'},
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
    private utilService: UtilService
  ) { }

  ngOnInit(): void {

    // DEV - auto opener - addContract
    // this.addContract();
  }

  addContract(): void {
    console.log('addContract:');
    this.contractModalsService.openAddContract()
      .subscribe((res: any) => {
        console.log('editContract: success', res);
      });
  }

  editContract(contract: any, contractId: number): void {
    console.log('contract', contract);
    this.contractModalsService.openEditContract(contract)
      .subscribe((res: any) => {
        console.log('editContract: success', res);
      });
  }

  deleteContract(contract: any, contractId: number): void {
    console.log('deleteContract:', contractId, contract);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this contract from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: approve', res);

      }, (reason: string) => {
        console.log('confirm: decline');
      });
  }

}
