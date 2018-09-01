import { NgModule } from '@angular/core';

import { CLIENT_ROUTES } from './client.routes';

import { HeaderComponent } from '../components/partials/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ProductsComponent } from '../components/products/products.component';
import { ListCartComponent } from '../components/list-cart/list-cart.component';
import { FooterComponent } from '../components/partials/footer/footer.component';
import { PagesComponent } from './pages.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeroComponent,
        ProductsComponent,
        ListCartComponent,
        PagesComponent,        
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeroComponent,
        ProductsComponent,
        ListCartComponent
    ],
    imports: [
        CLIENT_ROUTES
    ]
})

export class ClientModule {}