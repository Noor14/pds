import {EventEmitter, Injectable} from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import {AddUpdateSearchStoreComponent} from '../components/add-update-search-store/add-update-search-store.component';
import {ECRUDModalModes, IAddUpdateSearchStoreConfig, IStore} from '../store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private utilService: UtilService) { }

  private addUpdateSearchStore(config: IAddUpdateSearchStoreConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchStoreComponent, config, { class: 'modal-lg' });
  }


  openSearchStore(): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Search,
      store: null
    };

    return this.addUpdateSearchStore(config);
  }

  openAddStore(istore: IStore): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Add,
      store: null
    };

    return this.addUpdateSearchStore(config);
  }

  openEditStore(): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Edit,
      store: null
    };

    return this.addUpdateSearchStore(config);
   }
  }
