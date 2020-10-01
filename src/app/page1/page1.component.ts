import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, slideBottomTopAnimation, slideRightLeftAnimation } from '../animation/index';
@Component({
  selector: 'app-page1',
  animations: [fadeInAnimation, slideBottomTopAnimation, slideRightLeftAnimation],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data =`What is empathy? and why empathy matters at workplace?`
}
