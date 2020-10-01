import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  products: any;
  pagenumber: number;
  

  constructor(public service: MainService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClient.get("assets/json/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
  start(){
    setTimeout(() => {
      this.router.navigateByUrl('/page1');
      this.pagenumber = 1;
    }, 1000);
    
  }
}
