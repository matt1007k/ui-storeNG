import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes_client: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ]
    },
    
];

export const CLIENT_ROUTES = RouterModule.forChild(routes_client);