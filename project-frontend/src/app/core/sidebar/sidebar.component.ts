import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  effect,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TravelOrders } from '../Classes/TravelOrders.model';
import { CommonModule } from '@angular/common';
import { OrderService } from '../Services/order.service';
import {
  OperationResult,
  OperationStatus,
} from '../Classes/OperationResult.interface';
import { SharedService } from '../Services/shared.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SidebarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  showSpanContent = false;
  showModal: boolean = false;
  selectedTravelOrder: TravelOrders = {} as TravelOrders;
  selectedDate!: string;
  isSidebarCollapsed: boolean = false;
  constructor(
    private orderService: OrderService,
    private sidebarService: SidebarService,
    private sharedService: SharedService
  ) {
    effect(() => {
      this.isSidebarCollapsed = this.sidebarService.isCollapsed$();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  openModal() {
    this.showModal = true;
    // Optional: Add logic to reset selectedVehicle or set default values for a new order if needed
  }

  closeModal() {
    this.showModal = false;
  }

  // Placeholder functions - adapt these to your order logic
  addOrder(form: any) {
    if (form.valid) {
      this.selectedTravelOrder = form.value;
      this.orderService.AddTravelOrder(this.selectedTravelOrder).subscribe(
        (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            alert('Successfully Added Order');
            this.sharedService.emitRefresh();
          } else {
            alert(result.exceptionMessage);
          }
        },
        (error) => {
          const errorMessages = error.error
            .map((err: any) => err.errorMessage)
            .join('\n');

          // Display the error messages in an alert
          alert(errorMessages);
        }
      );
      form.reset();
      this.closeModal();
    }
    this.closeModal();
  }
}
