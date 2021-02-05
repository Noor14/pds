import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '@shared/components/table/table.model';
import { DoctorModalsService } from '@root/app/doctor/services/doctor-modals.service';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';
import { UtilService } from '@shared/services/util.service';
import { DoctorService } from '@root/app/doctor/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  rows = [
    {id: '00005', name: 'Dr Kumail Abbas', specialities: 'General Physician', contact: '03001166545' , experienceStartYear: 2020, totalDoctor: 12, totalSale: 230000, memberSince: '10/Feb/2019'},
    {id: '00001', name: 'Dr Shahzad Nawaz', specialities: 'Diabeties', contact: '03453145456' , experienceStartYear: 2008, totalDoctor: 30, totalSale: 100000, memberSince: '10/May/2019'},
    {id: '00002', name: 'Dr Sikandar Ali', specialities: 'Heart Specialist', contact: '03456825456', experienceStartYear: 2015, totalDoctor: 8, totalSale: 70000, memberSince: '10/Feb/2019'},
    {id: '00003', name: 'Dr Arif Shabbir', specialities: 'Neuro surgeon', contact: '03453111821' , experienceStartYear: 1994, totalDoctor: 5, totalSale: 150000,  memberSince: '01/Jan/2020'},
    {id: '00004', name: 'Dr Zulqarain', specialities: 'Child Specialist', contact: '03476422556' , experienceStartYear: 2016, totalDoctor: 25, totalSale: 400000, memberSince: '20/Aug/2018'},
  ];

  columns = [
    { name: 'Doctor ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'Specialities', prop: 'specialities'},
    { name: 'Total Doctors', prop: 'totalDoctor'},
    { name: 'Total Sale', prop: 'totalSale'},
    { name: 'Experience Since', prop: 'experienceStartYear'},
    { name: 'Contact', prop: 'contact'},
    { name: 'Member Since', prop: 'memberSince'},
  ];

  actions = [
    { name: 'View / Edit', handler: this.editDoctor.bind(this)},
    { name: 'Delete', handler: this.deleteDoctor.bind(this)},
  ];
  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'New Doctor',
      handler: this.addDoctor.bind(this),
    }
  };

  constructor(
    private doctorModalsService: DoctorModalsService,
    private utilService: UtilService,
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
  }

  addDoctor(): void {
    console.log('addDoctor:');
    this.doctorModalsService.openAddDoctor();
  }

  editDoctor(doctor: any, doctorId: number): void {
    console.log('editOrder:', doctorId, doctor);

    this.doctorModalsService.openEditDoctor(doctor)
      .subscribe((success: any) => {
        console.log("editProductModel: success");
      }, (error: any) => {
        console.log("editProductModel: failure");
      })
  }

  deleteDoctor(doctor: any, doctorId: number): void {
    console.log('deleteDoctor:', doctorId, doctor);


    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this doctor from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: prompt: approve', res);

        this.doctorService.apiDeleteOne(doctor.id)
          .subscribe((res: any) => {
            console.log('deleteDoctor: success', res);

            this.utilService.alert({
              isError: false,
              headingText: 'Done !',
              message: 'Doctor has been removed successfully.',
              approveButtonText: 'OK'
            });

          }, (reason: string) => {
            console.log('deleteDoctor: failed', res);

            this.utilService.alert({
              isError: true,
              headingText: '',
              message: 'Doctor could not be deleted.',
              approveButtonText: 'OK'
            });
          });

      }, (reason: string) => {
        console.log('confirm: prompt: decline');
      });
  }

}
