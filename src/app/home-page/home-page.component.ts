
import { GetProductsService, Product } from './../services/get-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent implements OnInit {

  constructor(private service: GetProductsService) { }

  index=0;
  interval:any;
  records: Product[]=[];
  featuredItems:Product[]=[];

  carouselItems:any[]=[
    {
      path:"./assets/img/baner1.jpg",
      status:"active"
    },
    {
      path:"./assets/img/baner2.jpg",
      status:"inactive"
    },
    {
      path:"./assets/img/baner3.jpg",
      status:"inactive"
    }
  ]

  nextItem(){
    this.carouselItems[this.index].status="inactive";
    this.index++;
    if(this.index>2)
      this.index=0;
    this.carouselItems[this.index].status="active";
    clearInterval(this.interval);
    this.autoChange();
  }

  prevItem(){
    this.carouselItems[this.index].status="inactive";
    this.index--;
    if(this.index<0){
      this.index=2;
    }
    this.carouselItems[this.index].status="active";
    clearInterval(this.interval);
    this.autoChange();
  }

  autoChange(){
    this.interval=setInterval(()=>{
      this.nextItem();
    },3800);
  }


  ngOnInit(): void {
    this.autoChange();
    this.service.getProducts().subscribe(
      (data: Product[]) =>{
         this.records = data
         this.featuredItems.push(this.records[Math.ceil(Math.random()*28)]);
         this.featuredItems.push(this.records[Math.ceil(Math.random()*28)]);
         this.featuredItems.push(this.records[Math.ceil(Math.random()*28)]);
        }
      );         
  }
}
