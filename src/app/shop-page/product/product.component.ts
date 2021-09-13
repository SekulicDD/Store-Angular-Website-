
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  @Input() product:any=[];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    
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
    
  
    localStorage.setItem("products", JSON.stringify(products));
    this.toastr.success("","Item successfully added to cart!",{
      timeOut: 1500,
    });
  }
}


