import { Component, OnInit } from '@angular/core';
import { ITeamUserParsed } from '@root/app/user/users.model';
import { ITableConfig } from '@shared/components/table/table.model';
import { UserService } from '@root/app/user/services/user.service';
// import { UserModalsService } from '@root/app/user/services/user-modals.service';
import { IConfirmConfig, UtilService } from '@shared/services/util.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  rows: ITeamUserParsed[] = [];
  columns = [
    { name: 'User ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'username', prop: 'username'},
    { name: 'Area / City', prop: 'customAreaName'},
    { name: 'status', prop: 'customStatus'},
    { name: 'Member Since', prop: 'createdOn'},
    { name: 'Contact', prop: 'customContacts'}
  ];
  actions = [
    { name: 'View / Edit', handler: this.editUser.bind(this)},
    { name: 'Delete', handler: this.deleteUser.bind(this)},
  ];

  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'Add User',
      handler: this.addUser.bind(this),
    }
  };

  messages = {
    emptyMessage: '', // dynamic based of the fetch error, or filter to none.
    customNoRecords: 'No Companies found in the system. Please click "New Company" to add one.',
    customFilteredNoMatch: 'No Companies match with entered value.',
    customFetchError: 'Failed in fetching Companies.',
  };

  constructor(
    private userService: UserService,
    // private userModalsService: UserModalsService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    console.log('fetchUsers:');
    this.userService.apiGetList({})
      .subscribe((res: { users: ITeamUserParsed[], totalCount: number }) => {
        console.log('fetchUsers: success', res.users);

        this.rows = res.users;
        console.log(this.rows);
        this.messages.emptyMessage = this.messages.customNoRecords;
      }, (reason: string) => {
        console.log('fetchUsers: error');
        this.messages.emptyMessage = this.messages.customFetchError;
      });
  }

  addUser(): void {
    console.log('addUser:');
/*
    this.userModalsService.openAddUser()
      .subscribe((res: any) => {
        console.log('editUser: success', res);

        // refresh table to load latest records.
        this.fetchUsers();
      });
*/
  }

  editUser(user: any, userIdx: number): void {
    console.log('editUser:', userIdx, user);

/*
    this.userModalsService.openEditUser(user)
      .subscribe((res: any) => {
        console.log('editUser: success', res);

        // refresh table to load latest records.
        this.fetchUsers();
      });
*/
  }

  deleteUser(user: any, userIdx: number): void {
    console.log('deleteUser:', userIdx, user);

   /* const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this user from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: prompt: approve', res);

        this.userService.apiDeleteOne(user.id)
          .subscribe((res: any) => {
            console.log('deleteUser: success', res);

            this.utilService.alert({
              isError: false,
              headingText: 'Done !',
              message: 'User has been removed successfully.',
              approveButtonText: 'OK'
            });

            // refresh table to load latest records.
            this.fetchUsers();

          }, (reason: string) => {
            console.log('deleteUser: failed', res);

            this.utilService.alert({
              isError: true,
              headingText: '',
              message: 'User could not be deleted.',
              approveButtonText: 'OK'
            });
          });

      }, (reason: string) => {
        console.log('confirm: prompt: decline');
      });*/
  }


}
