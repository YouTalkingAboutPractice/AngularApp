import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationResult } from '../Classes/OperationResult.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../Constants/constants';
import { TravelOrders } from '../Classes/TravelOrders.model';
import { AllocatedOrders } from '../Classes/AllocatedOrders.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  AddTravelOrder(travelOrder: TravelOrders): Observable<OperationResult> {
    return this.http.post<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.ADD_TRAVEL_ORDER,
      travelOrder
    );
  }
  AllocateOrder(allocatedOrders: AllocatedOrders[]) {
    return this.http.post<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.ALLOCATE_ORDER,
      allocatedOrders
    );
  }
  CompleteOrder(allocatedOrderID: number) {
    return this.http.put<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.COMPLETE_ALLOCATED_ORDER +
        '/' +
        allocatedOrderID,
      {}
    );
  }
  DeleteTravelOrder(travelOrderID: number) {
    return this.http.delete<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.DELETE_TRAVEL_ORDER +
        '/' +
        travelOrderID
    );
  }
  DeleteAllocatedOrder(allocatedOrderID: number) {
    return this.http.delete<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.DELETE_ALLOCATED_ORDER +
        '/' +
        allocatedOrderID
    );
  }
  UpdateAllocatedOrder(allocatedOrder: AllocatedOrders) {
    return this.http.put<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.UPDATE_ALLOCATED_ORDER,
      allocatedOrder
    );
  }
  UpdateTravelOrder(travelOrder: TravelOrders) {
    return this.http.put<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.UPDATE_TRAVEL_ORDER,
      travelOrder
    );
  }
  AllocatedOrderCost(allocatedOrders: AllocatedOrders[]) {
    return this.http.post<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.ALLOCATED_ORDER_COST,
      allocatedOrders
    );
  }
  IsValidDriver(allocatedOrders: AllocatedOrders[], DriverID: number) {
    return this.http.post<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.IS_VALID_DRIVER +
        '?driverID=' +
        DriverID,
      allocatedOrders
    );
  }
  IsValidVehicle(allocatedOrders: AllocatedOrders[], VehicleID: number) {
    return this.http.post<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.IS_VALID_VEHICLE +
        '?vehicleID=' +
        VehicleID,
      allocatedOrders
    );
  }
}
