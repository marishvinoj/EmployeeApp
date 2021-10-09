import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'employee',
    pathMatch: 'full',
    redirectTo: 'employee/login'
  },
  {
    path: 'employee',
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
