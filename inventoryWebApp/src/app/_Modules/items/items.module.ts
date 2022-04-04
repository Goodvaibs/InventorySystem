import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_Shared/shared.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
  
    ListComponent,
       AddComponent,
       ViewComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ItemsModule { }
