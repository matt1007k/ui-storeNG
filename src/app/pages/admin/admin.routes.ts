import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StoresComponent } from './stores/stores.component';


const rutas_admin : Routes = [
    {
        path: '',
        component: DashboardComponent,    
        children: [
            { path: 'dashboard', component: HomeComponent },
            { path: 'perfil', component: ProfileComponent },
            { path: 'tiendas', component: StoresComponent },
        ] 
    },
];

export const ROUTES_ADMIN = RouterModule.forChild(rutas_admin);