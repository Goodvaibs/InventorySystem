import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './_Shared/Components/header/header.component'

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    loadChildren:()=> import('./_Modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
