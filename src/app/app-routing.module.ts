import { ItemsListComponent } from './modules/pages/items-list/items-list.component';

import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RequiresAuthGuard } from './core/guards/requires-auth.guard';
import { LoginComponent } from './modules/pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  // canActivate: [RequiresAuthGuard],
  {
    path: 'items',
    component: ItemsListComponent,
    canActivate: [RequiresAuthGuard],
  },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
