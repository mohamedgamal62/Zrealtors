import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/pages/home/home.component';
import { SignUpComponent } from './Modules/auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './Modules/auth/pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Sign-up',
    component: SignUpComponent,
  },
  {
    path: 'Sign-in',
    component: SignInComponent,
  },
];
