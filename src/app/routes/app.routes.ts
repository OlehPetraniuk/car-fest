import {Routes} from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { SettingsComponent } from './settings/settings.component';
import { CarMaintComponent } from './car-maint/car-maint.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { SignInComponent } from '../../spa/users/sign-in/sign-in.component';
import { RegistrationComponent } from '../../spa/users/registration/registration.component';
export const appRoutes: Routes = [
    {path: 'sign-in', component: SignInComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'authenticated', component: AuthenticatedComponent, children: [
        {path: 'home', component: AppHomeComponent},
        {path: 'settings', component: SettingsComponent},
        {path: 'car-maint', component: CarMaintComponent},
        {path: 'car-list/:count', component: CarListComponent },
        {path: 'car-detail/:car', component: CarDetailComponent},
    ]},
    {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
    {path: '**', component: SignInComponent},

];