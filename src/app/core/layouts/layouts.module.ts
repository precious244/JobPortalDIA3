import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutsModule { }
