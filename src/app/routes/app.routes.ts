import {Routes} from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { SettingsComponent } from './settings/settings.component';
import { CarMaintComponent } from './car-maint/car-maint.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
export const appRoutes: Routes = [
    {path: 'authenticated', component: AuthenticatedComponent, children: [
        {path: 'home', component: AppHomeComponent},
        {path: 'settings', component: SettingsComponent},
        {path: 'car-maint', component: CarMaintComponent},
        {path: 'car-list/:count', component: CarListComponent },
        {path: 'car-detail/:car', component: CarDetailComponent},
    ]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: AppHomeComponent},

];