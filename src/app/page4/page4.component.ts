import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import { MainService } from '../main.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements AfterViewInit {

  //data = `Let's ﬁnd out if you can identify the more empathetic response in some common Global IT
  //situations. Remember, empathy is a key element to creating great client experiences.`
  data = `Let's find out if you can identify the more empathetic response in client experience scenarios. This exercise uses some common situations that come up in Global IT. See if you can correctly answer the questions, and also think about how you might respond given your role and responsibilities.`;
  data1 = `Rules of the game:
  <ul>
  <li>For each scenario, you have two options to choose from.</li>
  <li>Choose the option you feel is the most empathic response to the scenario.</li>
  </ul>
  `;

  public showContent = false;
  public showContent1 = true;

  constructor(private service: MainService) {
    setInterval(() => this.showContent = true, 5000);
    this.service.showNavigation(false);
  }
  ngAfterViewInit(): void {
    const tl = new TimelineMax();
    tl.to("#startbtn", { opacity: 1, duration: 1, delay: 10 });
  }

}
