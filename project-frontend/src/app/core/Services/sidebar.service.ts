import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // private isCollapsedSubject = new BehaviorSubject<boolean>(false); // Initial state
  // isCollapsed$: Observable<boolean> = this.isCollapsedSubject.asObservable();
  isCollapsed = signal<boolean>(false);
  isCollapsed$ = this.isCollapsed.asReadonly();

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}
