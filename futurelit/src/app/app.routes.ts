import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.page').then( m => m.GetStartedPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
  },
  {
    path: 'verify',
    loadComponent: () => import('./verify/verify.page').then( m => m.VerifyPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'skill-set',
    loadComponent: () => import('./skill-set/skill-set.page').then( m => m.SkillSetPage)
  }
];