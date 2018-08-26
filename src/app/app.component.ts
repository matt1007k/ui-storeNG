import { Component, OnInit } from '@angular/core';

import { ProductService } from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui-store';
  products:any = []

  constructor(public _productService: ProductService){}

  ngOnInit(){
    this._productService.allProductos()
      .subscribe(response => {
        this.products = response;
        console.log(this.products)
      });
  }
}
