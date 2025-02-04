export class TravelOrders {
  id: number;
  fromLocation: string;
  toLocation: string;
  approxDistance: number;
  timeNeeded: number;
  numPassengers: number;
  purpose: string;
  goodsWeightTonne: number | null;
  startDate: string;
  endDate: string;
  allocated: boolean;
  constructor() {
    this.id = 0;
    this.fromLocation = '';
    this.toLocation = '';
    this.approxDistance = 0;
    this.timeNeeded = 0;
    this.numPassengers = 0;
    this.purpose = 'P'; // Default value from DTO
    this.goodsWeightTonne = null;
    this.startDate = '';
    this.endDate = '';
    this.allocated = false;
  }
}
