import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  open: Boolean = false;

  constructor() { 
    
  }

  ngOnInit() {
  }

  toggleOpen(){
  
    this.open = !this.open;
    console.log(this.open)
  }

  

  

}
