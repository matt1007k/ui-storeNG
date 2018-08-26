import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const rutas: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

export const ROUTES_APP = RouterModule.forRoot(rutas, { useHash: true });