import { paths } from './paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostOrderService {

  constructor(private service:HttpClient) { }

  postOrder(data:any){
    this.service.post<any>(paths.orders,data).subscribe(response=>console.log(response));
  }

}

export interface Order{
  id:number,
  first_name:string,
  last_name:string,
  phone:string,
  address:string,
  products:OrderProduct[],
  total:number,
  createdAt:Date
}

export interface OrderProduct{
  name:string,
  price:number,
  quantity:number,
}
