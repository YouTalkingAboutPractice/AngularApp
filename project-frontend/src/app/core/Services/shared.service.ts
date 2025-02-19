import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  formSwitch = signal<boolean>(false);
  formType = signal<string>('Order');
  formFunction = signal<string>('Add');
  formValue = signal<object>({});
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
