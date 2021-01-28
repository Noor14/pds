import { Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import {
  // IAddDoctorSuccessData,
  // IGetAllDoctorsSuccessData,
  IDoctorParsed,
  // IDoctorPayload,
  IDoctorRaw
} from '@root/app/doctor/doctors.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { doctorsRawMock } from '@root/app/doctor/doctors.mock';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private endpoint = `doctors`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) {
  }

  apiAddOne(doctorRaw: any): Observable<any> {
    // console.log('apiAddOne:', doctorRaw);
    // return of({
    //   doctor: doctorRaw
    // })
    return this.httpService.post(`${this.endpoint}`, doctorRaw)
      .pipe(
        map((data: any) => {
          data.doctor = this.parseOne(data.doctor);
          return data;
        })
      );
  }

  apiUpdateOne(doctorId: number, doctorRaw: any): Observable<any> {
    // console.log('apiUpdateDoctor:', doctorRaw);
    // return of({
    //   doctor: doctorRaw
    // })
    return this.httpService.post(`${this.endpoint}/${doctorId}`, doctorRaw)
      .pipe(
        map((data: any) => {
          data.doctor = this.parseOne(data.doctor);
          return data;
        })
      );
  }

  apiDeleteOne(doctorRaw: IDoctorRaw): Observable<any> {
    // console.log('apiDeleteOne:', doctorRaw);
    // return of({
    //   doctor: doctorsRawMock[0]
    // })
    return this.httpService.delete(`${this.endpoint}/${doctorRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.doctor = this.parseOneDoctor(data.doctor);
          return data;
        })
      );
  }

  apiGetOne(doctorId: string): Observable<any> {
    // console.log('apiGetOne:', doctorId);
    // return of({
    //   doctor: doctorsRawMock[0]
    // })
    return this.httpService.delete(`${this.endpoint}/${doctorId}`)
      .pipe(
        map((data: any) => {
          data.doctor = this.parseOne(data.doctor);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    // return of({
    //   doctors: doctorsRawMock,
    //   totalCount: doctorsRawMock.length,
    // })
    return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: any) => {
          data.doctors = this.parseList(data.doctors);
          return data;
        })
      );
  }

  parseList(doctorsRaw: IDoctorRaw[]): IDoctorParsed[] {
    // console.log('parseList:', doctorsRaw);
    return doctorsRaw.map((doctorRaw: IDoctorRaw) => this.parseOne(doctorRaw));
  }

  // @ts-ignore
  parseOne(doctorRaw: IDoctorRaw): IDoctorParsed {
    // console.log('parseOne:', doctorRaw);
    const doctor = Object.assign({
      name: '',
      totalSaleAmount: 0,
      totalOrders: 0,

      customAreaName: '',
      customPersons: '',
    }, doctorRaw);

    // doctor.name = doctor.doctorInfo.name;
    // doctor.totalSaleAmount = doctor.doctorInfo.totalSaleAmount;
    // doctor.totalOrders = doctor.doctorInfo.totalOrders;
    //
    // doctor.customAreaName = ''; // TODO implement area name
    // doctor.customPersons = doctor.doctorInfo.persons[0].phone.join('<br>');

    // return doctor;
  }
}
