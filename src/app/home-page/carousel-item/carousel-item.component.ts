import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
  animations: [
    trigger('state', [
        state('inactive', style({
            opacity: '0',
        })),
        state('active', style({
            opacity: '1',
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
    ])
]
})
export class CarouselItemComponent implements OnInit {

  @Input() item:any="";

  constructor() { }

  ngOnInit(): void {
  }

}
