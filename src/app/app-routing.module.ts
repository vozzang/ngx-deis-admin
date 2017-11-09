import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './core/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'apps', loadChildren: 'app/apps/apps.module#AppsModule', canLoad: [AuthGuardService]},
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule', canLoad: [AuthGuardService]},
  { path: 'keys', loadChildren: 'app/keys/keys.module#KeysModule', canLoad: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
