import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { gsap,TimelineMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

@Component({
  selector: 'app-animatedtext',
  templateUrl: './animatedtext.component.html',
  styleUrls: ['./animatedtext.component.scss']
})
export class AnimatedtextComponent implements AfterViewInit {

  @Input() data;
  @Input() font;
  @Input() textId;

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
    this.animate();
  }

  animate() {
    const bracketPanel = document.querySelector('#' + this.textId + ' .corButton');
    const leftBracket = document.querySelector('#' + this.textId + ' .left');
    const rightBracket = document.querySelector('#' + this.textId + ' .right');
    const text = document.querySelector('#' + this.textId + ' .text');

    const speed = 1;
    const ease = 'Back.easeOut.config(1.7)';
    const tl = new TimelineMax();

    tl.fromTo(bracketPanel, { opacity: 0, ease: ease }, { duration: speed, opacity: 1 }, 1);
    tl.fromTo(leftBracket, { opacity: 0, ease: ease }, { duration: speed, opacity: 1 }, 1);
    tl.fromTo(rightBracket, { opacity: 0, ease: ease }, { duration: speed, opacity: 1 }, 1);
    tl.fromTo(text, { opacity: 0, ease: ease }, { duration: speed, opacity: 1, ease: ease }, 2);
    tl.fromTo(leftBracket, { left: '40%', ease: ease }, { duration: speed, left: 0, ease: ease }, 2);
    tl.fromTo(rightBracket, { right: '40%', ease: ease }, { duration: speed, right: 24, ease: ease }, 2);

    tl.to(leftBracket, { opacity: 0, ease: ease }, 3);
    tl.to(rightBracket, { opacity: 0, ease: ease }, 3);
  }
}