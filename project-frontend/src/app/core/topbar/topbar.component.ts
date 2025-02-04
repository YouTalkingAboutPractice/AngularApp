import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  name = localStorage.getItem('Name');
  currentPageTitle = 'Home'; // Default title
  currentPageSubTitle = 'Real-time overview of your fleet and bookings';
  constructor(private LoginSrv: LoginService, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPageTitle = this.getTitleFromRoute(event.url);
        this.currentPageSubTitle = this.getSubTitleFromRoute(event.url);
      });
  }

  private getTitleFromRoute(url: string): string {
    switch (url) {
      case '/Dashboard':
        return 'Home';
      case '/Drivers':
        return 'Drivers';
      case '/Vehicles':
        return 'Vehicles';
      default:
        return 'Home'; // Default title
    }
  }
  private getSubTitleFromRoute(url: string): string {
    switch (url) {
      case '/Dashboard':
        return 'Real-time overview of your fleet and bookings';
      case '/Drivers':
        return 'List Of Drivers';
      case '/Vehicles':
        return 'List Of Vehicles';
      default:
        return 'Real-time overview of your fleet and bookings'; // Default title
    }
  }
  onLogout() {
    this.LoginSrv.logoutUser();
  }
}
