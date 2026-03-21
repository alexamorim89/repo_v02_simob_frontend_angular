import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';

@Component({
  selector: 'acmo-app-layout',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayoutComponent {

}
