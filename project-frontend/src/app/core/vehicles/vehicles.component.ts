import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Vehicles } from '../Classes/Vehicles.model';
import {
  OperationResult,
  OperationStatus,
} from '../Classes/OperationResult.interface';
import { CommonModule } from '@angular/common';
import { AdminService } from '../Services/admin.service';
import { ResourceService } from '../Services/resource.service';
@Component({
  selector: 'app-vehicles',
  imports: [FormsModule, CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {
  searchTerm: string = '';
  sortColumn: string = '';
  vehicles: Vehicles[] = [];
  pageSize: number = 10;
  pageNum: number = 1;
  sortField: string = 'ID';
  sortOrder: string = 'Asc';
  type: string = 'L';
  purpose: string = 'A';
  totalVehicles: number = 0;
  totalPages: number = 0;
  min: number = 1;
  max: number = 5;
  switch: boolean = false;
  showDropdown: boolean = false;
  selectedOption: string | null = null;
  sortOptions: { value: string; label: string }[] = [
    { value: '', label: 'Sort by' },
    { value: 'ID', label: 'ID' },
    { value: 'Name', label: 'Name' },
    { value: 'MakeModel', label: 'Make Model' },
    { value: 'RegistrationNumber', label: 'Registration Number' },
    { value: 'PerKMCost', label: 'Per KM Cost' },
    { value: 'VehicleType', label: 'Vehicle Type' },
    { value: 'Purpose', label: 'Purpose' },
    { value: 'PassengerCapacity', label: 'Passenger Capacity' },
    { value: 'WeightCapacity', label: 'Weight Capacity' },
  ];
  constructor(
    private adminService: AdminService,
    private resourceService: ResourceService
  ) {}

  get pages(): number[] {
    const min = this.min;
    if (this.totalPages <= 5) {
      return Array(this.totalPages)
        .fill(0)
        .map((x, i) => i + 1);
    } else {
      return Array(5)
        .fill(0)
        .map((_, i) => i + min);
    }
  }

  showModal: boolean = false;
  editMode: boolean = true;
  selectedVehicle: Vehicles = {} as Vehicles;
  vehicleID: number = 0;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if the click is outside the custom select
    if (this.showDropdown && !target.closest('.custom-select')) {
      this.showDropdown = false;
    }
  }

  addVehicleStart() {
    this.editMode = false;
    this.selectedVehicle = {
      name: '',
      makeModel: '',
      registrationNumber: '',
      perKMCost: 0,
      passengerCapacity: 0,
      weightCapacity: 0,
      vehicleType: '', // Or 'H' or 'L' if you want a default type
      purpose: '', // Important: Initialize purpose to empty string for placeholder
      status: true, // Assuming you want new vehicles to be active by default
    } as Vehicles;
    this.openModal();
  }
  openModal() {
    this.showModal = true;
    //this.editMode = false;
    //this.selectedVehicle = {} as Vehicles;
    // if (!this.editMode) {
    //   this.selectedVehicle = {} as Vehicles;
    // }
  }

  closeModal() {
    this.showModal = false;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(value: string) {
    this.sort(value);
    this.showDropdown = false;
  }

  addVehicle(form: NgForm) {
    if (form.valid) {
      this.selectedVehicle = form.value;
      this.adminService.AddVehicle(this.selectedVehicle).subscribe(
        (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.type,
              this.purpose,
              this.searchTerm
            );
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
  }
  updateVehicle(form: NgForm) {
    if (form.valid) {
      form.value.id = this.selectedVehicle.id;
      this.selectedVehicle = form.value;
      this.adminService.UpdateVehicle(this.selectedVehicle).subscribe(
        (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.type,
              this.purpose,
              this.searchTerm
            );
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
  }

  editVehicle(vehicle: Vehicles) {
    this.selectedVehicle = { ...vehicle };
    this.editMode = true;
    this.openModal();
  }

  ngOnInit() {
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
    this.resourceService.GetTotalVehicles(this.searchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.totalVehicles = result.data;
          this.totalPages = Math.ceil(this.totalVehicles / this.pageSize);
          this.min = 1;
          if (this.totalPages > 5) {
            this.max = 5;
          } else {
            this.max = this.totalPages;
          }
        } else {
          alert(result.exceptionMessage);
        }
      },
      error: (error) => {},
    });
  }

  sort(Field: string) {
    this.selectedOption = Field;
    this.sortColumn = Field;
    if (this.sortField === Field) {
      this.sortOrder === 'Asc'
        ? (this.sortOrder = 'Desc')
        : (this.sortOrder = 'Asc');
    } else {
      this.sortOrder = 'Asc';
    }
    this.CallDB(
      this.pageSize,
      this.pageNum,
      Field,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
    this.sortField = Field;
  }
  search(term: string) {
    this.searchTerm = term;
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
    this.resourceService.GetTotalVehicles(this.searchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.totalVehicles = result.data;
          this.totalPages = Math.ceil(this.totalVehicles / this.pageSize);
        } else {
          // Handle error (e.g., display an error message)
          console.error('Failed to fetch vehicles:', result);
        }
      },
      error: (error) => {
        // Handle error (e.g., display an error message)
        console.error('An error occurred:', error);
      },
    });
  }
  previousPage() {
    this.pageNum--;
    this.min--;
    this.max--;
    if (this.pageNum < 1) {
      this.pageNum = 1;
      this.min = 1;
    }
    if (this.min < 1) {
      this.min = 1;
      this.max = this.min + 4;
    }
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
  }
  nextPage() {
    this.pageNum++;
    this.max++;
    this.min++;
    if (this.pageNum > this.totalPages) {
      this.pageNum = this.totalPages;
    }
    if (this.max > this.totalPages) {
      this.max = this.totalPages;
      this.min = this.max - 4;
    }
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
  }
  goToPage(page: number) {
    const diff = page - this.pageNum;
    this.pageNum = page;
    this.min = this.min + diff;
    this.max = this.max + diff;
    if (this.pageNum < 1) {
      this.pageNum = 1;
    } else if (this.pageNum > this.totalPages) {
      this.pageNum = this.totalPages;
    }
    if (this.min < 1) {
      this.min = 1;
    }
    if (this.max > this.totalPages) {
      this.max = this.totalPages;
    }
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
  }
  PageSizeChange(size: number) {
    this.pageSize = size;
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.type,
      this.purpose,
      this.searchTerm
    );
  }
  changeStatus(vehicle: Vehicles, state: boolean) {
    if (vehicle.status !== state) {
      this.adminService.FlipVehicleStatus(vehicle.id).subscribe({
        next: (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.type,
              this.purpose,
              this.searchTerm
            );
          } else {
            alert(result.exceptionMessage);
          }
        },
        error: (error) => {
          alert(error.error.exceptionMessage);
        },
      });
    }
  }
  private CallDB(
    size: number,
    num: number,
    field: string,
    order: string,
    type: string,
    purpose: string,
    searchTerm: string
  ) {
    this.resourceService
      .GetVehicles(size, num, field, order, type, purpose, searchTerm)
      .subscribe({
        next: (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.vehicles = result.data as Vehicles[];
          } else {
            alert(result.exceptionMessage);
          }
        },
        error: (error) => {
          alert(error.message);
        },
      });
  }
  onPurposeChange(purpose: string) {
    if (purpose === 'P') {
      this.selectedVehicle.weightCapacity = 0; // Set weightCapacity to 0 if purpose is 'P'
    }
    if (purpose === 'G') {
      this.selectedVehicle.passengerCapacity = 0; // Set weightCapacity to 0 if purpose is 'P'
    }
  }
}
