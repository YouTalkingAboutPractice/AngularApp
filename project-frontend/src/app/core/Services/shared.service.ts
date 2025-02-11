import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private date = signal<string>('');
  date$ = this.date.asReadonly();
  updateDate(date: string) {
    this.date.set(date);
  }

  refreshSignal = signal<number>(0); // Create a signal
  emitRefresh() {
    this.refreshSignal.update((value) => value + 1); // Update the signal to trigger reactivity
  }
  constructor() {}
}
