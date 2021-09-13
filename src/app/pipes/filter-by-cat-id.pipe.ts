import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/get-products.service';

@Pipe({
  name: 'filterByCatId'
})
export class FilterByCatIdPipe implements PipeTransform {

  transform(products: Product[], catId:string): Product[] {
    return products.filter(product=>{
      if(product.category_id==catId)
        return product;
      return false;
    });
  }

}
