import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MainService {
  products: any;
  pagenumber = 1;

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/json/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

}