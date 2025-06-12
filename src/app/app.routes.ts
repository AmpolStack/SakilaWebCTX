import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: MainComponent},
    { path: 'movie/:referenceId', component: MovieComponent},
    { path: 'actor', component: ActorComponent },
    { path: 'search', component: SearchComponent},
    { path: '**', component: LandingComponent}
];
