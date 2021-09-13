import { paths } from './paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor(private service:HttpClient) { }

  getCategories(){
    return this.service.get<Category[]>(paths.categories);
  }
  getMainCategories(){
    return this.service.get<MainCategory[]>(paths.mainCategories);
  }




}

export interface Category{
  id:string;
  name:string;
  main_category_id:string;
}

export interface MainCategory{
  id:string;
  name:string;
  categories:[]
}