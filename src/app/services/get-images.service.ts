import { paths } from './paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  constructor(private service:HttpClient) { }

  getImages(){
    return this.service.get<Images[]>(paths.images);
  }

}

export interface Images{
  id:number,
  name:string,
  path:string
}
