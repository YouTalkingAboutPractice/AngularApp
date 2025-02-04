import { Drivers } from './Drivers.model';
import { TravelOrders } from './TravelOrders.model';
import { Vehicles } from './Vehicles.model';

export class AllocatedOrders {
  allocatedOrderID: number;
  travelOrderID: number;
  vehicleID: number;
  driverID: number;
  plannedCost: number;
  travelOrder: TravelOrders;
  vehicle: Vehicles;
  driver: Drivers;
  constructor() {
    this.allocatedOrderID = 0;
    this.travelOrderID = 0;
    this.vehicleID = 0;
    this.driverID = 0;
    this.plannedCost = 0;
    this.travelOrder = {} as TravelOrders;
    this.vehicle = {} as Vehicles;
    this.driver = {} as Drivers;
  }
}
