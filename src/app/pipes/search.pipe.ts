import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/get-products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], keyword:string): Product[] {
    return products.filter(x=>x.name.toLowerCase().includes(keyword.toLowerCase()));  
  }

}
