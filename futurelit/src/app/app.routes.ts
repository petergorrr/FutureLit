import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
  // {
  //   path: 'splash',
  //   loadChildren: () => import('./splash/splash.page').then( m => m.SplashPage)
  // },
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.page').then( m => m.GetStartedPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
  }
];