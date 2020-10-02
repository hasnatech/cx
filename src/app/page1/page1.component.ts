import { AfterViewInit, Component} from '@angular/core';
import { TimelineMax } from "gsap";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const right = document.getElementById('right_img');
    const speed = 0.5;
    const ease = "Back.easeOut.config(1.7)";
    let tl = new TimelineMax();
    tl.fromTo(right, speed, { x: 200, opacity: 0, ease: ease }, { x: 0, opacity: 1, delay: 2 }, 0);
  }
  data = `<h2>What is empathy? and<br>why empathy matters at workplace?</h2>`
}
