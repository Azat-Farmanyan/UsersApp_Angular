import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users-page' },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./core/components/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'users-page',
    loadChildren: () =>
      import('./core/components/users-page/users-page.module').then(
        (m) => m.UsersPageModule
      ),
  },
  {
    path: 'user-page',
    loadChildren: () =>
      import('./core/components/user-page/user-page.module').then(
        (m) => m.UserPageModule
      ),
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
