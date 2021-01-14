import {EventEmitter, Injectable} from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { IAddUpdateSearchStoreConfig, IStore, ECRUDModalModes } from '../store.model';
import {AddUpdateSearchStoreComponent} from '../components/add-update-search-store/add-update-search-store.component';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private utilService: UtilService) { }

  private addUpdateSearchStore(config: IAddUpdateSearchStoreConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchStoreComponent, config, { class: 'modal-lg' });
  }


  openSearchStore(store: IStore): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Search,
      store: store
    };

    return this.addUpdateSearchStore(config);
  }

  openAddStore(store: IStore): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Add,
      store: IStore
    };

    return this.addUpdateSearchStore(config);
  }

  openEditStore(store: IStore): EventEmitter<any> {
    const config: IAddUpdateSearchStoreConfig = {
      mode: ECRUDModalModes.Edit,
      store: IStore
    };

    return this.addUpdateSearchStore(config);
   }
  }
