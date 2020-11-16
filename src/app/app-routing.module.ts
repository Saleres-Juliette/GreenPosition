import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./log/log.module').then( m => m.LogPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  {
    path: 'feed-page',
    loadChildren: () => import('./feed-page/feed-page.module').then( m => m.FeedPagePageModule)
  },
  {
    path: 'result-feed-page',
    loadChildren: () => import('./result-feed-page/result-feed-page.module').then( m => m.ResultFeedPagePageModule)
  },
  {
    path: 'advice-feed-page',
    loadChildren: () => import('./advice-feed-page/advice-feed-page.module').then( m => m.AdviceFeedPagePageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'result-mobility-page',
    loadChildren: () => import('./result-mobility-page/result-mobility-page.module').then( m => m.ResultMobilityPagePageModule)
  },
  {
    path: 'result-accomodation-page',
    loadChildren: () => import('./result-accomodation-page/result-accomodation-page.module').then( m => m.ResultAccomodationPagePageModule)
  },
  {
    path: 'mobility-page',
    loadChildren: () => import('./mobility-page/mobility-page.module').then( m => m.MobilityPagePageModule)
  },
  {
    path: 'accomodation-page',
    loadChildren: () => import('./accomodation-page/accomodation-page.module').then( m => m.AccomodationPagePageModule)
  },
  {
    path: 'essai',
    loadChildren: () => import('./essai/essai.module').then( m => m.EssaiPageModule)
  },  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
