import { AdminGuard } from './core/guards/admin.guard';
import { RegisterComponent } from './modules/pages/register/register.component';
import { ItemsFormComponent } from './modules/admin/items-form/items-form.component';
import { RequiresAuthGuard } from './core/guards/requires-auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/pages/contact-us/contact.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { ItemsListComponent } from './modules/admin/items-list/items-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'contact',

    component: ContactComponent,
  },

  {
    path: 'items',

    component: ItemsListComponent,
    canActivate: [RequiresAuthGuard, AdminGuard],
  },
  {
    path: 'items/new',

    component: ItemsFormComponent,
    canActivate: [RequiresAuthGuard],
  },
  {
    path: 'items/:id',

    component: ItemsFormComponent,
    canActivate: [RequiresAuthGuard],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
