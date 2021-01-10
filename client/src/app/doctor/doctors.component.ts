import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  rows = [
    {id: '00001', name: 'Dr Shahzad Nawaz', specialities: 'Gynelogist', contact: '03453145456' , experience: '7Years', totalContract: 8, memberSince: '10/May/2019'},
    {id: '00002', name: 'Dr Sakinder Ali', specialities: 'Heart Specialist', contact: '03456825456', experience: '7Years', totalContract: 8, memberSince: '10/Feb/2019'},
    {id: '00003', name: 'Dr Arif Shabbir', specialities: 'Neuro surgeon', contact: '03453111821' , experience: '3Years', totalContract: 1, memberSince: '01/Jan/2020'},
    {id: '00004', name: 'Dr Zulqarain', specialities: 'Child Specialist', contact: '03476422556' , experience: '7Years', totalContract: 29, memberSince: '20/Aug/2018'},
    {id: '00005', name: 'Dr Kumail Abbas', specialities: 'General Physician', contact: '03001166545' , experience: '7Years', totalContract: 12, memberSince: '10/Feb/2019'}
  ];

  columns = [
    { name: 'Doctor ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'specialities', prop: 'specialities'},
    { name: 'contact', prop: 'contact'},
    { name: 'Experience', prop: 'experience'},
    { name: 'Total Contract', prop: 'totalContract'},
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
