import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animatedtext',
  templateUrl: './animatedtext.component.html',
  styleUrls: ['./animatedtext.component.scss']
})
export class AnimatedtextComponent implements OnInit {
  @Input() data;
  @Input() type;
  @Input() text;
  
  constructor() { }

  ngOnInit() {
  }
  
}