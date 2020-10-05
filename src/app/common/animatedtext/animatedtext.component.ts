import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TimelineMax } from "gsap";

@Component({
  selector: 'app-animatedtext',
  templateUrl: './animatedtext.component.html',
  styleUrls: ['./animatedtext.component.scss']
})
export class AnimatedtextComponent implements AfterViewInit {

  @Input() data;
  @Input() type;
  @Input() text;
  @Input() animation = 'play';

  constructor() { }

  ngAfterViewInit(): void {

    const bracketPanel = document.getElementsByClassName('corButton');
    const leftBracket = document.getElementsByClassName('left');
    const rightBracket = document.getElementsByClassName('right');
    const text = document.getElementsByClassName('text');

    const speed = 1;
    const ease = "Back.easeOut.config(1.7)";
    let tl = new TimelineMax();

    tl.fromTo(bracketPanel, speed, { opacity: 0, ease: ease }, { opacity: 1 }, 1);
    tl.to(text, speed, { opacity: 1, ease: ease }, 2);
    tl.to(leftBracket, speed, { left: 0, ease: ease }, 2);
    tl.to(rightBracket, speed, { right: 24, ease: ease }, 2);
    //tl.pause();
    /*console.log('this.animation 1', this.animation);
    if (this.animation.toString() === 'stop') {
      console.log('this.animation 2', this.animation);  
      tl.play();
    }*/
  }
}