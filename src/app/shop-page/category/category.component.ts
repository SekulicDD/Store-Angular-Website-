import { ActivatedRoute } from '@angular/router';

import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { SlideUpDown } from "../../animations";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations:[SlideUpDown]
})
export class CategoryComponent implements OnInit {

  @Input() mainCategories:any=[];
  @Input() categories:any[]=[];
  @Input() fullCategories:any[]=[];
  @Output() pageChange:EventEmitter<number>=new EventEmitter<number>();

  categoryId:any=1;

  status:boolean=true;
  arrow="down";


  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.categoryId = params.get('catId'); 
    });   
  }
 
  showCategories(){
    this.status=!this.status;
    if(!this.status)
      this.arrow="up";
    else
      this.arrow="down";
  }

  

}
