import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'main', component: MainComponent},
    { path: 'movie', component: MovieComponent},
    { path: '**', component: LandingComponent}
];
