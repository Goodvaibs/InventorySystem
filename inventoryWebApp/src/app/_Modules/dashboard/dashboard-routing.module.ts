import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'items',
    loadChildren:()=>import('../items/items.module').then(m=>m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
