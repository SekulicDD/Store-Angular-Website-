import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-hover-animation',
  templateUrl: './hover-animation.component.html',
  styleUrls: ['./hover-animation.component.css'],
  animations: [
      trigger('hover', [
        transition("*=>true",[
          query("a img",animate(2000,keyframes([
            style({opacity:"0.95"}),
            style({opacity:"0.85"}),
            style({opacity:"1"}),
            ])
          ))
        ]),
        transition("true=>false",[
          query("a img",animate(1200,keyframes([
            style({opacity:"0.95"}),
            style({opacity:"0.85"}),
            style({opacity:"1"}),
            ])
          ))
        ]),
      ])
    ]
  })
export class HoverAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  state:any;

  hover:boolean=false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }



}
