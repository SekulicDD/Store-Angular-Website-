import { fadeIn } from './../animations';
import { GetProductsService, Product } from './../services/get-products.service';
import { Component, OnInit } from '@angular/core';
import { GetImagesService, Images } from '../services/get-images.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  animations:[fadeIn]
})
export class CartPageComponent implements OnInit {

  constructor( private servicePro: GetProductsService,
    private serviceImg: GetImagesService,
    private toastr:ToastrService) { }

  cartItems:any=[];
  products:any=[];
  sum:number=0;
  empty:boolean=true;

  onRemoveFromCart(id:number){
    this.products.splice(this.products.findIndex((x:any)=>x.id==id),1);
    localStorage.setItem("products",JSON.stringify(this.products));
    this.calculateSum();
    this.toastr.error("","Item successfully removed from cart!",{
      timeOut: 1500,
    });
  }


    changeQuantity(id:any,event:any){    
      this.products.find((x:any)=>x.id==id).quantity=event.target.value;
      localStorage.setItem("products",JSON.stringify(this.products));
      this.calculateSum();
    }

    calculateSum(){
      var sum=0;
      this.products.forEach((el:any) => {
        sum+=el.price*el.quantity;
      });
      this.sum=sum;
    }


  
  ngOnInit(): void {
    this.sum=0;
    this.products=[];
    this.cartItems=JSON.parse(localStorage.getItem("products")!);
    
    if(this.cartItems!=null){
      this.empty=false;
      this.servicePro.getProducts().subscribe(
        (data: Product[]) =>{
          data.forEach(el => {
            var a=this.cartItems.find((x:any)=>x.id==el.id);
            if(a){
              el.quantity=a.quantity;
              this.products.push(el);   
              this.sum+=el.quantity*Number(el.price); 
            }       
          });  
          this.serviceImg.getImages().subscribe(
            (dataImg: Images[]) =>{
              this.products.forEach((el:any) => {
                el.image=dataImg.find(x=>x.id==el.image_id);              
              })
            }); 
        });
    }
  }
    
}
