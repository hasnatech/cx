import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, TimelineMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
    const right = document.getElementById('right_img');
    const speed = 0.5;
    const ease = "Back.easeOut.config(1.7)";
    let tl = new TimelineMax();
    tl.fromTo(right,  { x: 200, opacity: 0, ease: ease }, { duration: speed, x: 0, opacity: 1, delay: 2 }, 0);
  }
  data =`<h2>Empathy is a critical component to serving our clients and building relationships as we see our clients needs and pain points from their perspective.</h2>`
}
