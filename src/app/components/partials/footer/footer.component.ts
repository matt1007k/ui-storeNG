import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  ano: any;
  constructor() { }

  ngOnInit() {
    this.ano = new Date().getFullYear();
  }

}
