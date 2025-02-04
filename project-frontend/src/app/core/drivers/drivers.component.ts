import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Drivers } from '../Classes/Drivers.model';
import {
  OperationResult,
  OperationStatus,
} from '../Classes/OperationResult.interface';
import { CommonModule } from '@angular/common';
import { AdminService } from '../Services/admin.service';
import { ResourceService } from '../Services/resource.service';

@Component({
  selector: 'app-drivers',
  imports: [FormsModule, CommonModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css',
})
export class DriversComponent {
  searchTerm: string = '';
  sortColumn: string = '';
  drivers: Drivers[] = [];
  pageSize: number = 10;
  pageNum: number = 1;
  sortField: string = 'ID';
  sortOrder: string = 'Asc';
  HMV: boolean = false;
  totalDrivers: number = 0;
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
    { value: 'PerDayRate', label: 'Per Day Rate' },
    { value: 'OvertimeRate', label: 'Overtime Rate' },
    { value: 'HVL', label: 'HVL' },
    { value: 'Status', label: 'Status' },
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
  selectedDriver: Drivers = {} as Drivers;
  driverID: number = 0;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if the click is outside the custom select
    if (this.showDropdown && !target.closest('.custom-select')) {
      this.showDropdown = false;
    }
  }

  addDriverStart() {
    this.editMode = false;
    this.selectedDriver = {
      name: '', // Default empty name
      mobileNumber: '', // Default empty mobile number
      perDayRate: 0, // Default per day rate
      overtimeRate: 0, // Default overtime rate
      posessHeavyVehicleLicence: false, // Default to false
      status: true, // Default to active
    } as Drivers;
    this.openModal();
  }
  openModal() {
    this.showModal = true;
    //this.editMode = false;
    //this.selectedDriver = {} as Drivers;
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

  addDriver(form: NgForm) {
    if (form.valid) {
      this.selectedDriver = form.value;
      this.adminService.AddDriver(this.selectedDriver).subscribe(
        (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.HMV,
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
  updateDriver(form: NgForm) {
    if (form.valid) {
      form.value.id = this.selectedDriver.id;
      this.selectedDriver = form.value;
      this.adminService.UpdateDriver(this.selectedDriver).subscribe(
        (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.HMV,
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

  editDriver(driver: Drivers) {
    this.selectedDriver = { ...driver };
    this.editMode = true;
    this.openModal();
  }

  ngOnInit() {
    this.CallDB(
      this.pageSize,
      this.pageNum,
      this.sortField,
      this.sortOrder,
      this.HMV,
      this.searchTerm
    );
    this.resourceService.GetTotalDrivers(this.searchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.totalDrivers = result.data;
          this.totalPages = Math.ceil(this.totalDrivers / this.pageSize);
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
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
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
      this.HMV,
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
      this.HMV,
      this.searchTerm
    );
    this.resourceService.GetTotalDrivers(this.searchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.totalDrivers = result.data;
          this.totalPages = Math.ceil(this.totalDrivers / this.pageSize);
        } else {
          // Handle error (e.g., display an error message)
          console.error('Failed to fetch drivers:', result);
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
      this.HMV,
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
      this.HMV,
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
      this.HMV,
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
      this.HMV,
      this.searchTerm
    );
  }
  changeStatus(driver: Drivers, state: boolean) {
    if (driver.status !== state) {
      this.adminService.FlipDriverStatus(driver.id).subscribe({
        next: (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.CallDB(
              this.pageSize,
              this.pageNum,
              this.sortField,
              this.sortOrder,
              this.HMV,
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
    hmv: boolean,
    searchTerm: string
  ) {
    this.resourceService
      .GetDrivers(size, num, field, order, hmv, searchTerm)
      .subscribe({
        next: (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            this.drivers = result.data as Drivers[];
          } else {
            alert(result.exceptionMessage);
          }
        },
        error: (error) => {
          console.log('DB Call', error);
          alert(error.message);
        },
      });
  }
}
