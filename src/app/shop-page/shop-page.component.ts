import { fadeIn } from './../animations';
import { GetImagesService, Images } from './../services/get-images.service';
import { GetProductsService, Product } from './../services/get-products.service';
import { Category, GetCategoriesService, MainCategory } from './../services/get-categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  animations:[fadeIn]
})
export class ShopPageComponent implements OnInit {

  categories:any[]=[];
  mainCategories:any[]=[];
  products:any[]=[];
  image:any;

  page:number=1;
  categoryId:any=1;
  orderId:any="1";

  searchText:string="";
 
 
  constructor(
    private serviceCat: GetCategoriesService,
    private servicePro: GetProductsService,
    private serviceImg: GetImagesService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
   
    this.serviceCat.getCategories().subscribe(
      (data: Category[]) =>{
         this.categories = data});

    this.serviceCat.getMainCategories().subscribe(
    (data: MainCategory[]) =>{
        this.mainCategories = data
      });

    this.servicePro.getProducts().subscribe(
      (data: Product[]) =>{
        this.serviceImg.getImages().subscribe(
          (dataImg: Images[]) =>{
            this.products = data;
            this.products.forEach(el => {
              el.image=dataImg.find(x=>x.id==el.image_id);
              
            });
            });   
        });

      this.activatedRoute.paramMap.subscribe(params => { 
        this.categoryId = params.get('catId'); 
      });    
  }

  GetOutputVal(page:any){
    this.page=page;
  }

  onFilterChange(event:any){
    this.orderId=event.target.value;
  }

  onSearch(event:any){
    this.searchText=event.target.value;
  }

}
