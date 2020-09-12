import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';



@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent, AppSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
