import { EventEmitter, Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { ECRUDModalModes, IAddUpdateSearchContractConfig, IContractParsed } from '@root/app/contract/contracts.model';
import { AddUpdateSearchContractComponent } from '@root/app/contract/components/add-update-search-contract/add-update-search-contract.component';

@Injectable({
  providedIn: 'root'
})
export class ContractModalsService {


  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchContract(config: IAddUpdateSearchContractConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchContractComponent, config, { class: 'modal-lg' });
  }

  // openSearchContract(): EventEmitter<any> {
  //   const config: IAddUpdateSearchContractConfig = {
  //     mode: ECRUDModalModes.Search,
  //     contract: null
  //   };
  //
  //   return this.addUpdateSearchContract(config);
  // }

  openAddContract(): EventEmitter<any> {
    const config: IAddUpdateSearchContractConfig = {
      mode: ECRUDModalModes.Add,
      contract: null
    };

    return this.addUpdateSearchContract(config);
  }

  openEditContract(contract: IContractParsed): EventEmitter<any> {
    const config: IAddUpdateSearchContractConfig = {
      mode: ECRUDModalModes.Edit,
      contract: contract
    };

    return this.addUpdateSearchContract(config);
  }
}
