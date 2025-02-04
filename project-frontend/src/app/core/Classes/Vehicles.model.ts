export class Vehicles {
  id: number;
  name: string;
  makeModel: string;
  registrationNumber: string;
  perKMCost: number;
  vehicleType: string;
  purpose: string;
  status: boolean;
  passengerCapacity: number;
  weightCapacity: number;
  isVehicle: boolean;
  constructor() {
    this.id = 0;
    this.name = '';
    this.makeModel = '';
    this.registrationNumber = '';
    this.perKMCost = 0;
    this.vehicleType = 'L'; // Default value from DTO
    this.purpose = 'P'; // Default value from DTO
    this.status = true;
    this.passengerCapacity = 0;
    this.weightCapacity = 0;
    this.isVehicle = true;
  }
}
