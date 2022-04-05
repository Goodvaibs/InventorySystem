import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoryCheckPipe } from './Pipes/category-check.pipe';
import { ValidatorDirective } from './Directives/validator.directive';

const pipes:any[] = [CategoryCheckPipe]
const directives:any[] = [ValidatorDirective]
const components:any[] = [HeaderComponent,SidebarComponent,FooterComponent]

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CategoryCheckPipe,
    ValidatorDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [...pipes, ...directives, ...components]
})
export class SharedModule { }
