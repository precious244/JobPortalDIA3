import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './core/layouts/admin-content/admin-content.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: 'menu',
    component: AdminContentComponent,
    children: [{path  : 'login', 
    loadChildren:() => import('../app/module/admin/login/login.module').then((x) => x.LoginModule)}]
  },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }