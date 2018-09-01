import { NgModule } from '@angular/core';

import { ROUTES_ADMIN } from './admin.routes';

import { DashboardComponent } from './dashboard.component';

import { HeaderAdminComponent } from '../../components/partials/header-admin/header-admin.component';
import { FooterAdminComponent } from '../../components/partials/footer-admin/footer-admin.component';
import { SidebarAdminComponent } from '../../components/partials/sidebar-admin/sidebar-admin.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StoresComponent } from './stores/stores.component';

@NgModule({
  imports: [
    ROUTES_ADMIN
  ],
  declarations: [
    DashboardComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    HomeComponent,
    ProfileComponent,
    StoresComponent
  ],
  exports: [
    DashboardComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class AdminModule { }
