import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  rows = [
    {id: '00005', name: 'Dr Kumail Abbas', specialities: 'General Physician', contact: '03001166545' , experienceStartYear: 2020, totalContract: 12, totalSale: 230000, memberSince: '10/Feb/2019'},
    {id: '00001', name: 'Dr Shahzad Nawaz', specialities: 'Diabeties', contact: '03453145456' , experienceStartYear: 2008, totalContract: 30, totalSale: 100000, memberSince: '10/May/2019'},
    {id: '00002', name: 'Dr Sikandar Ali', specialities: 'Heart Specialist', contact: '03456825456', experienceStartYear: 2015, totalContract: 8, totalSale: 70000, memberSince: '10/Feb/2019'},
    {id: '00003', name: 'Dr Arif Shabbir', specialities: 'Neuro surgeon', contact: '03453111821' , experienceStartYear: 1994, totalContract: 5, totalSale: 150000,  memberSince: '01/Jan/2020'},
    {id: '00004', name: 'Dr Zulqarain', specialities: 'Child Specialist', contact: '03476422556' , experienceStartYear: 2016, totalContract: 25, totalSale: 400000, memberSince: '20/Aug/2018'},
  ];

  columns = [
    { name: 'Doctor ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'Specialities', prop: 'specialities'},
    { name: 'Total Contracts', prop: 'totalContract'},
    { name: 'Total Sale', prop: 'totalSale'},
    { name: 'Experience Since', prop: 'experienceStartYear'},
    { name: 'Contact', prop: 'contact'},
    { name: 'Member Since', prop: 'memberSince'},
  ];

  actions = [
    { name: 'View / Edit', handler: this.editDoctor.bind(this)},
    { name: 'Delete', handler: this.deleteDoctor.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editDoctor(order: any, orderId: number): void {
    console.log('editOrder:', orderId, order);
  }

  deleteDoctor(order: any, productIdx: number): void {
    console.log('deleteOrder:', productIdx, order);
  }

}