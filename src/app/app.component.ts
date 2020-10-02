import { Component } from '@angular/core';
import { MainService } from './main.service';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cx';
  //data: any;
  //products: any;
  intropage: boolean;
  pagenumber: number;
  clicked = true;
  touched = true;

  constructor(public service: MainService, private httpClient: HttpClient, private router: Router) {

  }
  ngOnInit() {
    this.pagenumber = 1;
    /*this.httpClient.get("assets/json/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })*/
  }

  next() {
    if (this.pagenumber < 5) {
    this.pagenumber++;
    this.router.navigateByUrl('/page' + this.pagenumber);
    }
  

    if (this.pagenumber == 5) {
      this.touched = true;
    }
    console.log(this.pagenumber)
  }

  previous() {
    this.pagenumber--;
    this.router.navigateByUrl('/page' + this.pagenumber);
    if (this.pagenumber == 0) {
      this.clicked = true;
      this.router.navigateByUrl('/home')
      this.pagenumber = 1
    }
    if (this.pagenumber != 5) {
      this.touched = true;
    }
    console.log(this.pagenumber)
  }

}

