import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  products: any;
  pagenumber = 1;
  showNav = false;

  constructor() { }

  /*ngOnInit() {
    this.httpClient.get("assets/json/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }*/

  showNavigation(b: boolean) {
    this.showNav = b;
  }

  getNavigation() {
    return this.showNav;
  }

}