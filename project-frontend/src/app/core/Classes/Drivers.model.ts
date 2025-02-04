export class Drivers {
  id: number;
  name: string;
  posessHeavyVehicleLicence: boolean;
  perDayRate: number;
  overtimeRate: number;
  mobileNumber: string;
  status: boolean;
  isDriver: boolean;
  constructor() {
    this.id = 0;
    this.name = '';
    this.posessHeavyVehicleLicence = false;
    this.perDayRate = 0;
    this.overtimeRate = 0;
    this.mobileNumber = '';
    this.status = true;
    this.isDriver = true;
  }
}
