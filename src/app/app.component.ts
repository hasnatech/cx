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
    this.pagenumber = Number(this.getCookie('currentPage'));
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
    this.setCookie('currentPage', this.pagenumber.toString());
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
    this.setCookie('currentPage', this.pagenumber.toString());
  }


  private getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return 1;
  }


  private setCookie(name: string, value: string, expireDays: number = 30, path: string = '') {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

}

