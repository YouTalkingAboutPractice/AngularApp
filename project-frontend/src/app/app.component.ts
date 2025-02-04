import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  effect,
  signal,
  Output,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LoginService } from './core/Services/login.service';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './core/topbar/topbar.component';
import { SidebarService } from './core/Services/sidebar.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, CommonModule, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  isSidebarCollapsed!: boolean;
  title = 'ProjectFrontend';
  isLoggedIn: boolean = true;
  isCollapsed: boolean = true;
  activePage = signal<string>('Dashboard');
  @Output() Refresh = new EventEmitter<string>();

  constructor(
    private loginService: LoginService,
    private sidebarService: SidebarService
  ) {
    effect(() => {
      this.isLoggedIn = this.loginService.isLoggedIn$();
      this.isCollapsed = this.sidebarService.isCollapsed$();
      console.log('testing inside dashboard effect', this.isCollapsed);
    });
  }
  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
