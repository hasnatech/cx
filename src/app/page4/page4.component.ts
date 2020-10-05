import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {
//start = false
 
  public showContent = false;
 
  constructor() { }

  ngOnInit(){
    setInterval(() => this.showContent = true, 5000);
    
  }


  data = `Let's ﬁnd out if you can identify the more empathetic response in some common Global IT
situations. Remember, empathy is a key element to creating great client experiences.`
  data1 = `Rules of the game:
<ul>
<li>For each scenario, you have two options to choose from.</li>
<li>Choose the option you feel is the most empathic response to the scenario.</li>
</ul>
`
}
