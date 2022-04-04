import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './_Shared/Components/header/header.component'
import { AuthGuard } from './_Shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HeaderComponent,
    loadChildren:()=> import('./_Modules/items/items.module').then(m=>m.ItemsModule)

  },
  {
    path:'',
    component:HeaderComponent,
    canActivate: [AuthGuard],
    loadChildren:()=> import('./_Modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
