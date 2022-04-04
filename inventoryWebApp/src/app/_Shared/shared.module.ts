import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoryCheckPipe } from './Pipes/category-check.pipe';

const pipes:any[] = [CategoryCheckPipe]

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CategoryCheckPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [...pipes]
})
export class SharedModule { }
