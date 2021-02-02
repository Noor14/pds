import { EventEmitter, Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { ECRUDModalModes, IAddUpdateSearchUserConfig, IUserParsed } from '@root/app/user/users.model';
import { AddUpdateSearchUserComponent } from '@user/components/add-update-search-user/add-update-search-user.component';

@Injectable({
  providedIn: 'root'
})
export class UserModalService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchUser(config: IAddUpdateSearchUserConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchUserComponent, config, { class: 'modal-lg' });
  }

  // openSearchUser(): EventEmitter<any> {
  //   const config: IAddUpdateSearchUserConfig = {
  //     mode: ECRUDModalModes.Search,
  //     user: null
  //   };
  //
  //   return this.addUpdateSearchUser(config);
  // }

  openAddUser(): EventEmitter<any> {
    const config: IAddUpdateSearchUserConfig = {
      mode: ECRUDModalModes.Add,
      user: null
    };

    return this.addUpdateSearchUser(config);
  }

  openEditUser(user: IUserParsed): EventEmitter<any> {
    const config: IAddUpdateSearchUserConfig = {
      mode: ECRUDModalModes.Edit,
      user: user
    };

    return this.addUpdateSearchUser(config);
  }

}
