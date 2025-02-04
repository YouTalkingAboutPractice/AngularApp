import { Component, Inject, LOCALE_ID, effect, inject } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { ResourceService } from '../Services/resource.service';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import {
  OperationResult,
  OperationStatus,
} from '../Classes/OperationResult.interface';
import { Vehicles } from '../Classes/Vehicles.model';
import { Drivers } from '../Classes/Drivers.model';
import { FormsModule } from '@angular/forms';
import { TravelOrders } from '../Classes/TravelOrders.model';
import { AllocatedOrders } from '../Classes/AllocatedOrders.model';
import { SharedService } from '../Services/shared.service';
import {
  CdkDragDrop,
  CdkDragEnd,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { SidebarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DatePipe],
  animations: [
    trigger('resetPosition', [
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'translate(0, 0)' })),
      ]),
    ]),
  ],
})
export class DashboardComponent {
  private sharedService = inject(SharedService);
  dataLoaded: boolean = false;
  isSidebarCollapsed!: boolean;
  selectedDate: string = this.formatDate(new Date());
  formattedStartDate!: string;
  formattedEndDate!: string;
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  vehicles: Vehicles[] = [];
  vehicleSelectedOption: string = '';
  vehicleSortOrder: string = 'Asc';
  vehicleSortField: string = 'ID';
  vehicleShowDropdown: boolean = false;
  vehicleSortOptions: { value: string; label: string }[] = [
    { value: ' ', label: 'Sort by' },
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
  vehiclePageSize: number = 3;
  vehiclePageNum: number = 1;
  vehicleType: string = 'L';
  vehiclePurpose: string = 'A';
  vehicleSearchTerm: string = '';
  vehicleTotal: number = 0;
  vehicleTotalPages: number = 0;
  vehicleMin: number = 1;
  vehicleMax: number = 1;
  selectedVehicle: Vehicles = {} as Vehicles;
  //Driver Variables
  drivers: Drivers[] = [];
  driverSelectedOption: string = '';
  driverSortOrder: string = 'Asc';
  driverSortField: string = 'ID';
  driverShowDropdown: boolean = false;
  driverSortOptions: { value: string; label: string }[] = [
    { value: ' ', label: 'Sort by' },
    { value: 'ID', label: 'ID' },
    { value: 'Name', label: 'Name' },
    { value: 'PerDayRate', label: 'Per Day Rate' },
    { value: 'OvertimeRate', label: 'Overtime Rate' },
    { value: 'HVL', label: 'HVL' },
    { value: 'Status', label: 'Status' },
  ];
  driverPageSize: number = 3;
  driverPageNum: number = 1;
  driverHMV: boolean = false;
  driverSearchTerm: string = '';
  driverTotal: number = 0;
  driverTotalPages: number = 0;
  driverMin: number = 1;
  driverMax: number = 1;
  selectedDriver: Drivers = {} as Drivers;
  //OrderSort Values
  travelOrderSortOptions: { value: string; label: string }[] = [
    { value: ' ', label: 'Sort by' },
    { value: 'fromLocation', label: 'From Location' },
    { value: 'toLocation', label: 'To Location' },
    { value: 'approxDistance', label: 'Approx. Distance' },
    { value: 'timeNeeded', label: 'Time Needed' },
    { value: 'numPassengers', label: 'No. of Passengers' },
    { value: 'purpose', label: 'Purpose' },
    { value: 'goodsWeightTonne', label: 'Goods Weight (Tonne)' },
    { value: 'endDate', label: 'End Date' },
  ];
  travelOrderShowDropdown: boolean = false;
  travelOrderSelectedOption: string = '';
  travelOrderSortOrder: string = 'Asc';
  travelOrders: TravelOrders[] = [] as TravelOrders[];
  travelOrderPageNum: number = 1;
  travelOrderSortField: string = 'ID';
  formattedDate: string = '';
  totalTravelOrders: number = 0;
  totalPages: number = 0;
  min: number = 1;
  max: number = 5;
  travelOrderIDs: number[] = [];
  // get pages(): number[] {
  //   const min = this.min;
  //   if (this.totalPages <= 5) {
  //     return Array(this.totalPages)
  //       .fill(0)
  //       .map((x, i) => i + 1);
  //   } else {
  //     return Array(5)
  //       .fill(0)
  //       .map((_, i) => i + min);
  //   }
  // }
  tempAllocatedOrders: AllocatedOrders[] = [] as AllocatedOrders[];
  allocatedOrders: AllocatedOrders[] = [] as AllocatedOrders[];
  allocatedOrderCount: number = 0;
  allocatedOrdersCost: number = 0;
  showModal: boolean = false;
  selectedTravelOrder: TravelOrders = {} as TravelOrders;
  dragBool: boolean = false;
  isLoadingVehicle: boolean = false;
  isLoadingDriver: boolean = false;
  isLoadingTravelOrder: boolean = false;
  ValidDictionary: { [key: string]: boolean } = {};

  openModal() {
    this.showModal = true;
    // Optional: Add logic to reset selectedVehicle or set default values for a new order if needed
  }

  closeModal() {
    this.showModal = false;
  }

  constructor(
    private OrderService: OrderService,
    private ResourceService: ResourceService,
    private datePipe: DatePipe,
    private sidebarService: SidebarService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    effect(() => {
      this.isSidebarCollapsed = this.sidebarService.isCollapsed$();
    });
    effect(() => {
      this.sharedService.refreshSignal(); // Watch the signal
      this.travelOrderRefresh();
    });
  }
  ngAfterViewInit() {}
  ngOnInit() {
    this.VehicleCallDB(
      this.vehiclePageSize,
      this.vehiclePageNum,
      this.vehicleSortField,
      this.vehicleSortOrder,
      this.vehicleType,
      this.vehiclePurpose,
      this.vehicleSearchTerm
    );
    this.ResourceService.GetTotalVehicles(this.vehicleSearchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.vehicleTotal = result.data;
          this.vehicleTotalPages = Math.ceil(
            this.vehicleTotal / this.vehiclePageSize
          );
          // if (
          //   this.vehicleTotalPages ===
          //   this.vehicleTotal / this.vehiclePageSize
          // ) {
          //   this.vehicleTotalPages = this.vehicleTotalPages - 1;
          // }
          this.vehicleMin = 1;
          this.vehicleMax = this.vehicleTotalPages;
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });

    this.DriverCallDB(
      this.driverPageSize,
      this.driverPageNum,
      this.driverSortField,
      this.driverSortOrder,
      this.driverHMV,
      this.driverSearchTerm
    );
    this.ResourceService.GetTotalDrivers(this.driverSearchTerm).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.driverTotal = result.data;
          this.driverTotalPages = Math.ceil(
            this.driverTotal / this.driverPageSize
          );
          // if (
          //   this.driverTotalPages ===
          //   this.driverTotal / this.driverPageSize
          // ) {
          //   this.driverTotalPages = this.driverTotalPages - 1;
          // }
          this.driverMin = 1;
          this.driverMax = this.driverTotalPages;
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });

    const formattedDate = this.datePipe.transform(
      this.selectedDate,
      'yyyy-MM-ddTHH:mm:ss'
    );
    if (formattedDate !== null) {
      this.formattedDate = formattedDate;
      // Use this.formattedDate here, where it's known to be a string
    } else {
      // Handle the case where formattedDate is null (e.g., set a default date, throw an error, etc.)
      console.error('Invalid date provided to DatePipe.');
      this.formattedDate = ''; // Or some other default value
    }
    this.TravelOrderCallDB(
      this.selectedDate,
      this.travelOrderPageNum,
      this.travelOrderSortField,
      this.travelOrderSortOrder
    );
    this.GetTotalTravelOrder(this.formattedDate);
    this.sharedService.updateDate(this.formattedDate);
  }

  vehicleToggleDropdown() {
    this.vehicleShowDropdown = !this.vehicleShowDropdown;
  }
  vehicleSelectOption(choice: string) {
    this.vehicleSelectedOption = choice;
    this.vehicleShowDropdown = !this.vehicleShowDropdown;
    this.vehicleSort(choice);
  }
  vehicleSort(Field: string) {
    if (this.vehicleSelectedOption === ' ') {
      this.vehicleSelectedOption = 'ID';
    }
    if (this.vehicleSortField === Field) {
      this.vehicleSortOrder === 'Asc'
        ? (this.vehicleSortOrder = 'Desc')
        : (this.vehicleSortOrder = 'Asc');
    } else {
      this.vehicleSortOrder = 'Asc';
      this.vehicleSortField = Field;
    }
    this.VehicleCallDB(
      this.vehiclePageSize,
      this.vehiclePageNum,
      this.vehicleSelectedOption,
      this.vehicleSortOrder,
      this.vehicleType,
      this.vehiclePurpose,
      this.vehicleSearchTerm
    );
    this.vehicleSortField = Field;
  }
  vehiclePreviousPage() {
    this.isLoadingVehicle = true;
    this.vehiclePageNum--;
    if (this.vehiclePageNum < 1) {
      this.vehiclePageNum = 1;
    }
    this.VehicleCallDB(
      this.vehiclePageSize,
      this.vehiclePageNum,
      this.vehicleSortField,
      this.vehicleSortOrder,
      this.vehicleType,
      this.vehiclePurpose,
      this.vehicleSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingVehicle = false; // Set loading to false after data is fetched
    }, 300);
  }
  vehicleNextPage() {
    this.isLoadingVehicle = true;
    this.vehiclePageNum++;
    if (this.vehiclePageNum > this.vehicleMax) {
      this.vehiclePageNum = this.vehicleMax;
    }
    this.VehicleCallDB(
      this.vehiclePageSize,
      this.vehiclePageNum,
      this.vehicleSortField,
      this.vehicleSortOrder,
      this.vehicleType,
      this.vehiclePurpose,
      this.vehicleSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingVehicle = false; // Set loading to false after data is fetched
    }, 300);
  }
  vehicleRefresh() {
    this.isLoadingVehicle = true;
    this.VehicleCallDB(
      this.vehiclePageSize,
      this.vehiclePageNum,
      this.vehicleSortField,
      this.vehicleSortOrder,
      this.vehicleType,
      this.vehiclePurpose,
      this.vehicleSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingVehicle = false; // Set loading to false after data is fetched
    }, 300);
  }
  private VehicleCallDB(
    size: number,
    num: number,
    field: string,
    order: string,
    type: string,
    purpose: string,
    searchTerm: string
  ) {
    this.ResourceService.GetVehicles(
      size,
      num,
      field,
      order,
      type,
      purpose,
      searchTerm
    ).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.vehicles = (result.data as Vehicles[]).map((vehicle) => {
            return { ...vehicle, isVehicle: true };
          });
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });
  }
  RemoveVehicle(allocatedOrder: AllocatedOrders) {
    allocatedOrder.vehicleID = 0;
    allocatedOrder.vehicle = {} as Vehicles;
    const index = this.allocatedOrders.findIndex(
      (order: AllocatedOrders) =>
        order.travelOrderID === allocatedOrder.travelOrderID
    );
    this.allocatedOrders[index].vehicleID = 0;
    this.allocatedOrders[index].vehicle = {} as Vehicles;
    console.log('testing 1');
    this.getAllocatedOrderCosts();
    this.checkAllocatedOrders();
  }

  //driver functions
  driverToggleDropdown() {
    this.driverShowDropdown = !this.driverShowDropdown;
  }
  driverSelectOption(choice: string) {
    this.driverSelectedOption = choice;
    this.driverShowDropdown = !this.driverShowDropdown;
    this.driverSort(choice);
  }
  driverSort(Field: string) {
    if (this.driverSortField === Field) {
      this.driverSortOrder === 'Asc'
        ? (this.driverSortOrder = 'Desc')
        : (this.driverSortOrder = 'Asc');
    } else {
      this.driverSortOrder = 'Asc';
      this.driverSortField = Field;
    }
    this.DriverCallDB(
      this.driverPageSize,
      this.driverPageNum,
      Field,
      this.driverSortOrder,
      this.driverHMV,
      this.driverSearchTerm
    );
    this.driverSortField = Field;
  }
  driverPreviousPage() {
    this.isLoadingDriver = true;
    this.driverPageNum--;
    if (this.driverPageNum < 1) {
      this.driverPageNum = 1;
    }
    this.DriverCallDB(
      this.driverPageSize,
      this.driverPageNum,
      this.driverSortField,
      this.driverSortOrder,
      this.driverHMV,
      this.driverSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingDriver = false; // Set loading to false after data is fetched
    }, 300);
  }
  driverNextPage() {
    this.isLoadingDriver = true;
    this.driverPageNum++;
    if (this.driverPageNum >= this.driverMax) {
      this.driverPageNum = this.driverMax;
    }
    this.DriverCallDB(
      this.driverPageSize,
      this.driverPageNum,
      this.driverSortField,
      this.driverSortOrder,
      this.driverHMV,
      this.driverSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingDriver = false; // Set loading to false after data is fetched
    }, 300);
  }
  driverRefresh() {
    this.isLoadingDriver = true;
    this.DriverCallDB(
      this.driverPageSize,
      this.driverPageNum,
      this.driverSortField,
      this.driverSortOrder,
      this.driverHMV,
      this.driverSearchTerm
    );
    setTimeout(() => {
      // Update vehicles array
      this.isLoadingDriver = false; // Set loading to false after data is fetched
    }, 300);
  }
  private DriverCallDB(
    size: number,
    num: number,
    field: string,
    order: string,
    hmv: boolean,
    searchTerm: string
  ) {
    this.ResourceService.GetDrivers(
      size,
      num,
      field,
      order,
      hmv,
      searchTerm
    ).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.drivers = (result.data as Drivers[]).map((driver) => {
            return { ...driver, isDriver: true };
          });
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });
  }

  RemoveDriver(allocatedOrder: AllocatedOrders) {
    const index = this.allocatedOrders.findIndex(
      (order: AllocatedOrders) =>
        order.travelOrderID === allocatedOrder.travelOrderID
    );
    this.allocatedOrders[index].driverID = 0;
    this.allocatedOrders[index].driver = {} as Drivers;
    console.log('testing 2');
    this.getAllocatedOrderCosts();
    this.checkAllocatedOrders();
  }

  //TravelOrder Functions

  onDateChange(event: any) {
    this.travelOrders = [] as TravelOrders[];
    this.selectedDate = event.target.value;
    this.TravelOrderCallDB(
      this.selectedDate,
      this.travelOrderPageNum,
      this.travelOrderSortField,
      this.travelOrderSortOrder
    );
    this.GetTotalTravelOrder(this.formattedDate);
    this.getAllocatedOrderDate(this.formattedDate);
    this.sharedService.updateDate(this.selectedDate);
    this.travelOrderPageNum = 1;
  }

  travelOrderSelectOption(choice: string) {
    this.travelOrderSelectedOption = choice;
    this.travelOrderSort(choice);
    this.travelOrderShowDropdown = !this.travelOrderShowDropdown;
  }
  travelOrderToggleDropdown() {
    this.travelOrderShowDropdown = !this.travelOrderShowDropdown;
  }
  travelOrderSort(Field: string) {
    this.allocatedOrdersCost = 0;
    this.allocatedOrderCount = 0;
    if (this.travelOrderSortField === Field) {
      this.travelOrderSortOrder === 'Asc'
        ? (this.travelOrderSortOrder = 'Desc')
        : (this.travelOrderSortOrder = 'Asc');
    } else {
      this.travelOrderSortOrder = 'Asc';
      this.travelOrderSortField = Field;
    }
    this.TravelOrderCallDB(
      this.selectedDate,
      this.travelOrderPageNum,
      this.travelOrderSortField,
      this.travelOrderSortOrder
    );
    this.travelOrderSortField = Field;
  }
  travelOrderRefresh() {
    console.log('Testing if this gets called');
    this.isLoadingTravelOrder = true;
    this.TravelOrderCallDB(
      this.selectedDate,
      this.travelOrderPageNum,
      this.travelOrderSortField,
      this.travelOrderSortOrder
    );
    this.GetTotalTravelOrder(this.selectedDate);
    setTimeout(() => {
      this.isLoadingTravelOrder = false;
    }, 300);
  }
  callRefresh() {
    console.log('this is a test to see if it gets captured');
    this.travelOrderRefresh();
  }
  private TravelOrderCallDB(
    date: string,
    pageNum: number,
    sortField: string,
    sortOrder: string
  ) {
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss');
    if (formattedDate !== null) {
      this.formattedDate = formattedDate;
      // Use this.formattedDate here, where it's known to be a string
    } else {
      // Handle the case where formattedDate is null (e.g., set a default date, throw an error, etc.)
      console.error('Invalid date provided to DatePipe.');
      this.formattedDate = ''; // Or some other default value
    }
    this.ResourceService.GetUnallocatedOrders(
      date,
      pageNum,
      sortField,
      sortOrder
    ).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.travelOrders = result.data as TravelOrders[];
          this.getAllocatedOrderDate(this.formattedDate);
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
        console.log(error.error.exceptionMessage);
      },
    });
  }

  // travelOrderNextPage() {
  //   this.travelOrderPageNum++;
  //   this.max++;
  //   this.min++;
  //   if (this.travelOrderPageNum > this.totalPages) {
  //     this.travelOrderPageNum = this.totalPages;
  //   }
  //   if (this.max > this.totalPages) {
  //     this.max = this.totalPages;
  //     this.min = this.max - 4;
  //   }
  //   this.TravelOrderCallDB(
  //     this.selectedDate,
  //     this.travelOrderPageNum,
  //     this.travelOrderSortField,
  //     this.travelOrderSortOrder
  //   );
  // }
  // travelOrderGoToPage(page: number) {
  //   const diff = page - this.travelOrderPageNum;
  //   this.travelOrderPageNum = page;
  //   this.min = this.min + diff;
  //   this.max = this.max + diff;
  //   if (this.travelOrderPageNum < 1) {
  //     this.travelOrderPageNum = 1;
  //   } else if (this.travelOrderPageNum > this.totalPages) {
  //     this.travelOrderPageNum = this.totalPages;
  //   }
  //   if (this.min < 1) {
  //     this.min = 1;
  //   }
  //   if (this.max > this.totalPages) {
  //     this.max = this.totalPages;
  //   }
  //   this.TravelOrderCallDB(
  //     this.selectedDate,
  //     this.travelOrderPageNum,
  //     this.travelOrderSortField,
  //     this.travelOrderSortOrder
  //   );
  // }
  // travelOrderPreviousPage() {
  //   this.travelOrderPageNum--;
  //   this.min--;
  //   this.max--;
  //   if (this.travelOrderPageNum < 1) {
  //     this.travelOrderPageNum = 1;
  //     this.min = 1;
  //   }
  //   if (this.min < 1) {
  //     this.min = 1;
  //     this.max = this.min + 4;
  //   }
  //   this.TravelOrderCallDB(
  //     this.selectedDate,
  //     this.travelOrderPageNum,
  //     this.travelOrderSortField,
  //     this.travelOrderSortOrder
  //   );
  // }
  // @HostListener('window:keydown', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {
  //   if (event.key === 'a' && this.travelOrderPageNum > 1) {
  //     this.travelOrderPreviousPage();
  //   } else if (event.key === 'd' && this.travelOrderPageNum < this.totalPages) {
  //     this.travelOrderNextPage();
  //   }
  // }

  public GetTotalTravelOrder(date: string) {
    this.ResourceService.GetTotalTravelOrder(date).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.totalTravelOrders = result.data.totalCount;
          this.totalPages = Math.ceil(this.totalTravelOrders / 3);
          this.min = 1;
          if (this.totalPages > 5) {
            this.max = 5;
          } else {
            this.max = this.totalPages;
          }
          this.travelOrderIDs = result.data.travelOrderIds;
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });
  }
  updateTravelOrder(form: any) {
    if (form.valid) {
      form.value.id = this.selectedTravelOrder.id;
      this.selectedTravelOrder = form.value;
      this.selectedTravelOrder.startDate = this.formatDateForDB(
        this.formattedStartDate
      );
      this.selectedTravelOrder.endDate = this.formatDateForDB(
        this.formattedEndDate
      );
      console.log('Updated End Date for DB:', this.selectedTravelOrder.endDate);
      const index = this.travelOrders.findIndex(
        (order) => order.id === this.selectedTravelOrder.id
      );
      this.OrderService.UpdateTravelOrder(this.selectedTravelOrder).subscribe({
        next: (result: OperationResult) => {
          if (result.status === OperationStatus.Success) {
            if (index !== -1) {
              this.travelOrders.splice(index, 1);
            }
            this.TravelOrderCallDB(
              this.selectedDate,
              this.travelOrderPageNum,
              this.travelOrderSortField,
              this.travelOrderSortOrder
            );
          } else {
            alert(result);
          }
        },
        error: (error) => {
          const errorMessages = error.error
            .map((err: any) => err.errorMessage)
            .join('\n');

          // Display the error messages in an alert
          alert(errorMessages);
        },
      });
      form.reset();
      this.closeModal();
      this.GetTotalTravelOrder(this.formattedDate);
      this.getAllocatedOrderDate(this.formattedDate);
    }
  }

  deleteTravelOrder(travelOrder: TravelOrders) {
    const index = this.travelOrders.findIndex(
      (order) => order.id === travelOrder.id
    );
    console.log('Before Order', this.travelOrders);
    this.OrderService.DeleteTravelOrder(travelOrder.id).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          alert('EntryDeleted');
          if (index !== -1) {
            this.travelOrders.splice(index, 1);
          }
          this.TravelOrderCallDB(
            this.selectedDate,
            this.travelOrderPageNum,
            this.travelOrderSortField,
            this.travelOrderSortOrder
          );
          this.GetTotalTravelOrder(this.formattedDate);
        } else {
          alert(result);
        }
      },
      error: (error) => {
        console.log('testing in delete');
        alert(error.error.exceptionMessage);
      },
    });
  }
  editTravelOrder(travelOrder: TravelOrders) {
    this.selectedTravelOrder = { ...travelOrder };
    console.log('startdate:', this.selectedTravelOrder.startDate);
    console.log('enddate;', this.selectedTravelOrder.endDate);
    if (this.selectedTravelOrder.startDate) {
      this.formattedStartDate = this.formatDateForDisplay(
        this.selectedTravelOrder.startDate
      );
    }
    if (this.selectedTravelOrder.endDate) {
      this.formattedEndDate = this.formatDateForDisplay(
        this.selectedTravelOrder.endDate
      );
    }

    console.log('Formatted Start Date:', this.formattedStartDate);
    console.log('Formatted End Date:', this.formattedEndDate);
    this.openModal();
  }
  initializeAllocatedOrders() {
    this.allocatedOrders = this.travelOrderIDs.map((travelOrder) => {
      const matchingTempOrder = this.tempAllocatedOrders.find(
        (tempOrder) => tempOrder.travelOrderID === travelOrder
      );
      if (matchingTempOrder) {
        return matchingTempOrder;
      } else {
        const placeholderOrder: AllocatedOrders = {
          travelOrderID: travelOrder,
          allocatedOrderID: 0,
          vehicleID: 0,
          driverID: 0,
          plannedCost: 0,
          travelOrder: {} as TravelOrders,
          vehicle: {} as Vehicles,
          driver: {} as Drivers,
        };
        return placeholderOrder;
      }
    });
    console.log('testing 3');
    this.getAllocatedOrderCosts();
    this.checkAllocatedOrders();
    this.dataLoaded = true;
  }
  getAllocatedOrder(travelOrderId: number): AllocatedOrders | undefined {
    const foundOrder = this.allocatedOrders.find(
      (order) => order.travelOrderID === travelOrderId
    );
    return foundOrder;
  }
  public getAllocatedOrderDate(date: string) {
    this.ResourceService.GetAllocatedOrdersWithDate(date).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.tempAllocatedOrders = result.data;
          console.log('this is tempallocatedOrder', this.tempAllocatedOrders);
          this.initializeAllocatedOrders(); // Call it here
        } else {
          alert(JSON.stringify(result));
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });
  }
  getAllocatedOrderCosts() {
    console.log('AllocatedOrder being sent', this.allocatedOrders);
    this.OrderService.AllocatedOrderCost(this.allocatedOrders).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.allocatedOrdersCost = result.data.total;
          const tempAllocatedOrders = result.data.allocatedOrders;
          for (var i = 0; i < this.totalTravelOrders; ++i) {
            this.allocatedOrders[i].plannedCost =
              tempAllocatedOrders[i].plannedCost;
          }
        } else {
          alert(result);
        }
      },
      error: (error) => {
        console.log('Allocated Order costs error');
        alert(error.error.exceptionMessage);
      },
    });
  }
  getFormattedDate(date: Date) {
    return this.formatDate(date);
  }
  checkAllocatedOrders() {
    this.allocatedOrderCount = 0;
    this.allocatedOrders.forEach((allocatedOrder) => {
      if (allocatedOrder.vehicleID !== 0 && allocatedOrder.driverID !== 0) {
        this.allocatedOrderCount += 1;
      }
    });
  }
  border(id: number) {
    const test = this.allocatedOrders.find(
      (order) => order.travelOrderID === id
    );
    if (test?.driverID == 0 && test?.vehicleID == 0) {
      return 0;
    } else if (test?.driverID != 0 && test?.vehicleID == 0) {
      return 2;
    } else if (test?.driverID == 0 && test?.vehicleID != 0) {
      return 1;
    } else {
      return 3;
    }
  }
  AllocateOrders() {
    this.OrderService.AllocateOrder(this.allocatedOrders).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          alert('Allocated Orders Successfully');
        } else {
          alert(result);
        }
      },
      error: (error) => {
        alert(error.error.exceptionMessage);
      },
    });
  }
  //Drag Events
  checkValidVehicle(vehicle: Vehicles) {
    this.OrderService.IsValidVehicle(
      this.allocatedOrders,
      vehicle.id
    ).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.ValidDictionary = result.data;
        } else {
        }
      },
      error: (error) => {},
    });
  }
  checkValidDriver(driver: Drivers) {
    this.OrderService.IsValidDriver(this.allocatedOrders, driver.id).subscribe({
      next: (result: OperationResult) => {
        if (result.status === OperationStatus.Success) {
          this.ValidDictionary = result.data;
        } else {
        }
      },
      error: (error) => {},
    });
  }
  dragStartedVehicle(vehicle: Vehicles) {
    this.selectedVehicle = vehicle;
    this.dragBool = true;
    this.checkValidVehicle(vehicle);
  }
  dragStartedDriver(driver: Drivers) {
    this.selectedDriver = driver;
    this.dragBool = true;
    this.checkValidDriver(driver);
  }

  dragEnded(event: CdkDragEnd) {
    this.dragBool = false;
    // Reset the position of the dragged element
    const element = event.source.element.nativeElement;
    element.classList.add('reset-position');

    // Remove the class after the animation completes to avoid conflicts
    setTimeout(() => {
      element.classList.remove('reset-position');
      event.source.reset(); // Reset position after animation
    }, 300); // Match the animation duration

    //event.source.reset();
  }

  onDrop(event: CdkDragDrop<any>) {
    const i = event.container.data;
    const object = event.item.data;
    if (this.ValidDictionary[i]) {
      const index = this.allocatedOrders.findIndex(
        (order: AllocatedOrders) => order.travelOrderID === i
      );
      if (object.isVehicle) {
        this.allocatedOrders[index].vehicleID = object.id;
        this.allocatedOrders[index].vehicle = object;
      } else if (object.isDriver) {
        this.allocatedOrders[index].driverID = object.id;
        this.allocatedOrders[index].driver = object;
      }
    }
    console.log('testing 5');
    this.getAllocatedOrderCosts();
    this.checkAllocatedOrders();
    this.ValidDictionary = {};
  }
  showVehicle: boolean = true;
  onDragEnter() {}

  onDragExit() {}

  formatDateForDisplay(dateString: string): string {
    const date = new Date(dateString);
    return formatDate(date, 'yyyy-MM-dd', this.locale);
  }
  formatDateForDB(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
