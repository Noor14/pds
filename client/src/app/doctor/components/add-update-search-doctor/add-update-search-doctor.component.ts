import { Component, EventEmitter, OnInit } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchDoctorConfig, IDoctorRaw } from '@root/app/doctor/doctors.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from '@shared/services/util.service';
import { DoctorService } from '@root/app/doctor/services/doctor.service';
import { specialities } from '@root/app/doctor/doctors.constant';

@Component({
  selector: 'app-add-update-search-doctor',
  templateUrl: './add-update-search-doctor.component.html',
  styleUrls: ['./add-update-search-doctor.component.scss']
})
export class AddUpdateSearchDoctorComponent implements OnInit {

  public result = new EventEmitter();
  public config: IAddUpdateSearchDoctorConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add Doctor',
    [ECRUDModalModes.Edit]: 'Edit Doctor',
    [ECRUDModalModes.Search]: 'Search Doctor',
    [ECRUDModalModes.ReadOnly]: 'View Doctor',
  };

  specialities = specialities;//using mocks data to show specialities

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };
  responseMessages = {
    success: {
      add: 'Doctor has been added successfully.',
      update: 'Doctor has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding doctor !',
      update: 'Failed in updating doctor !',
    },
  };

  doctorTypes = []; //doctorTypes;

  data: any = {
    id: '',
    name: '',
    speciality: '',

    experience: undefined,
    contact: undefined,
    memberSince: undefined
  };

  constructor(
    public bsModalRef: BsModalRef,
    public utilService: UtilService,
    public doctorService: DoctorService
  ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.renderDoctorToEdit();
    });
  }

  renderDoctorToEdit() {
    console.log('this.data', this.data);
    if (this.config && this.config.doctor) {
      this.data = this.utilService.deepCopyObject(this.config.doctor);
      console.log('this.data rendered', this.data);
    }
  }

  resetForm(): void {
    console.log('resetForm:');
    this.renderDoctorToEdit();
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
        this.addDoctor(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateDoctor(this.data);
        break;
    }
  }

  addDoctor(doctor: IDoctorRaw): void {
    this.doctorService.apiAddOne(doctor)
      .subscribe((res: any) => {
          console.log('add doctor : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add doctor : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });
  }

  updateDoctor(doctor: IDoctorRaw): void {
    this.doctorService.apiUpdateOne(doctor.id, doctor)
      .subscribe((res: any) => {
          console.log('updated doctor : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated doctor : Failure', res);
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
