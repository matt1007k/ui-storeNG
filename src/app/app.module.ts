import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './pages/home/home.component'
import { ROUTES_APP } from './routes';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { FooterComponent } from './components/partials/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    ProductsComponent,
    ListCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTES_APP
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
