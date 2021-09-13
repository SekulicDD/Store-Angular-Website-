import { GetImagesService, Images } from './../services/get-images.service';
import { GetProductsService, Product } from './../services/get-products.service';
import { GetCategoriesService, Category } from './../services/get-categories.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productId:any;
  product:any;

  constructor(private serviceCat: GetCategoriesService,
    private servicePro: GetProductsService,
    private serviceImg: GetImagesService,
    private activatedRoute:ActivatedRoute,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.productId = params.get('id'); 
    });  

    this.servicePro.getProducts().subscribe(
    (data: Product[]) =>{
      this.product=data.find(x=>x.id==this.productId);
   
      this.serviceCat.getCategories().subscribe(
        (dataCat: Category[]) =>{
          this.product.category=dataCat.find(x=>x.id==this.product.category_id);        
        });

      this.serviceImg.getImages().subscribe(
        (dataImg: Images[]) =>{
          this.product.image=dataImg.find(x=>x.id==this.product.image_id);
          }); 
              
      });
  }

  onAddToCart(id:any){
    var products:any[] = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products')!);
        var index;
        for (index = 0; index < products.length; index++) {
          if(products[index].id==id){
            products[index].quantity++;
            break;
          }
        }
        if(index==products.length)
          products.push({'id' : id, quantity:1});            
    }
    else
      products.push({'id' : id, quantity:1});
    
  
    localStorage.setItem('products', JSON.stringify(products));
    this.toastr.success("","Item successfully added to cart!",{
      timeOut: 1300,
    });
  }

}
