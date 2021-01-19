import { EventEmitter, Injectable } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchProductConfig, IProductParsed } from '../products.model';
import { AddUpdateSearchProductComponent } from '../components/add-update-search-product/add-update-search-product.component';
import { UtilService } from '@shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class ProductModalsService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchProduct(config: IAddUpdateSearchProductConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchProductComponent, config, { class: 'modal-lg' });
  }

  // openSearchProduct(): EventEmitter<any> {
  //   const config: IAddUpdateSearchProductConfig = {
  //     mode: ECRUDModalModes.Search,
  //     product: null
  //   };
  //
  //   return this.addUpdateSearchProduct(config);
  // }

  openAddProduct(): EventEmitter<any> {
    const config: IAddUpdateSearchProductConfig = {
      mode: ECRUDModalModes.Add,
      product: null
    };

    return this.addUpdateSearchProduct(config);
  }

  openEditProduct(product: IProductParsed): EventEmitter<any> {
    const config: IAddUpdateSearchProductConfig = {
      mode: ECRUDModalModes.Edit,
      product: product
    };

    return this.addUpdateSearchProduct(config);
  }

}
