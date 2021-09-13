import { paths } from './paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostMessageService {

  constructor(private service:HttpClient) { }

  postMessage(data:any){
    this.service.post<any>(paths.messages,data).subscribe(response=>console.log(response));
  }

}
