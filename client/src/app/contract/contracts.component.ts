import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  rows = [
    { id: '0000101', status: 'Completed', contractByName: 'Dr. Yameen', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 40,235', contractByContact: '+923001234567'},
    { id: '0000102', status: 'In Progress', contractByName: 'Dr. Abu Bakar', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 10,800', contractByContact: '+92333199999'},
    { id: '0000103', status: 'In Progress', contractByName: 'Dr. Yousuf', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 1,42,000', contractByContact: '+923021234500'},
    { id: '0000104', status: 'Completed', contractByName: 'Dr. Rutba', startDate: '01/Feb/2021', endDate: '01/Apr/2021', duration: 2, totalAmount: 'Rs. 2,00,000', contractByContact: '+92300177777'},
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

  constructor() { }

  ngOnInit(): void {
  }

  editContract(contract: any, contractId: number): void {
    console.log('editContract:', contractId, contract);
  }

  deleteContract(contract: any, productIdx: number): void {
    console.log('deleteContract:', productIdx, contract);
  }

}
