import { AfterViewInit, Component } from '@angular/core';
import { gsap, TimelineMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { MainService } from '../main.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements AfterViewInit {

  constructor(private service: MainService) {
  
  }

  ngAfterViewInit(): void {
    this.service.showNavigation(true);
    gsap.registerPlugin(CSSRulePlugin);
    const right = document.getElementById('right_img');
    const speed = 0.5;
    const ease = "Back.easeOut.config(1.7)";
    let tl = new TimelineMax();
    tl.fromTo(right, { x: 200, opacity: 0, ease: ease }, { duration: speed, x: 0, opacity: 1, delay: 2 }, 0);
    console.log("first Page")
  }
  data = `<h2>What is empathy? <br>Why does empathy matter at the workplace?</h2>`
}
