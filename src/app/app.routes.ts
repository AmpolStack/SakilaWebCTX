import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'home', component: LandingComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'main', component: MainComponent},
    { path: '**', component: LandingComponent}
];
