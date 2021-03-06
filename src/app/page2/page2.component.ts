import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, TimelineMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(CSSRulePlugin);
    const left = document.getElementById('left_img');
    const speed = 0.5;
    const ease = "Back.easeOut.config(1.7)";
    let tl = new TimelineMax();
    tl.fromTo(left, { x: -200, opacity: 0, ease: ease }, { duration: speed, x: 0, opacity: 1, delay: 2 }, 0);
  }
  data = `<h2>Empathy is awareness of other’s feelings, needs, and concerns.</h2>`
}
