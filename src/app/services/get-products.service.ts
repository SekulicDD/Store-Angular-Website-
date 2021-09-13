
import { paths } from './paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private service:HttpClient) { }

  getProducts(){
    return this.service.get<Product[]>(paths.products);
  }

  // getProductById(id:number){
  //   var product = this.service.get(paths.products)
  //   return product.find(x=>x.id==id);
  // }

}
export interface Product{
  category_id:string;
  description:string;
  id:string;
  image_id:string;
  name:string;
  price:number;
  quantity:number;
}
