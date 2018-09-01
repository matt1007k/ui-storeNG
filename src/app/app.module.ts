import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { ClientModule } from './pages/client.module';
import { AdminModule } from './pages/admin/admin.module';

import { ProductService } from './services/product.service';

import { ROUTES_APP } from './app.routes';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTES_APP,
    ClientModule,
    AdminModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
