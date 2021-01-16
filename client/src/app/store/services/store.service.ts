import {EventEmitter, Injectable} from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import {AddUpdateSearchStoreComponent} from '../components/add-update-search-store/add-update-search-store.component';
import {ECRUDModalModes, IAddUpdateSearchStoreConfig, IStore} from '../store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private utilService: UtilService
  ) { }

  }
