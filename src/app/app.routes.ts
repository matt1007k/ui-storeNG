import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';

const rutas: Routes = [
    
    {
        path: '**',
        component: HomeComponent,
        
    }
];

export const ROUTES_APP = RouterModule.forRoot(rutas, { useHash: true });