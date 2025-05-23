import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/pages/home/home.component';
import { SignUpComponent } from './Modules/auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './Modules/auth/pages/sign-in/sign-in.component';
import { SignUpArComponent } from './Modules/auth -ar/pages/sign-up/sign-up-ar.component';
import { HomeArComponent } from './Modules/home -ar/pages/home/home-ar.component';
import { SignInArComponent } from './Modules/auth -ar/pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ar',
    component: HomeArComponent,
  },
  {
    path: 'Sig-up',
    component: SignUpComponent,
  },
  {
    path: 'Sig-in',
    component: SignInComponent,
  },
  {
    path: 'sig-in-ar',
    component: SignInArComponent,
  },
  {
    path: 'sig-up-ar',
    component: SignUpArComponent,
  },
];
