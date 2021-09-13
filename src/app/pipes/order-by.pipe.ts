import { Product } from './../services/get-products.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: Product[], filterId:string): Product[] {
    switch (filterId) {
      case "1":
        return products.sort((a,b)=>{
          return a.name.localeCompare(b.name);
        });    
      case "2":
        return products.sort((a,b)=>{
          return b.name.localeCompare(a.name);
        });
      case "3":
        return products.sort((a,b)=>{
          return b.price-a.price;
        });
      case "4":
        return products.sort((a,b)=>{
          return a.price-b.price;
        });
      default:      
        return products;
    }
    
  }

}
