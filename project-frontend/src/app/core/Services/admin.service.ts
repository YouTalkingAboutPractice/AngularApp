import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationResult } from '../Classes/OperationResult.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Vehicles } from '../Classes/Vehicles.model';
import { Constants } from '../Constants/constants';
import { Drivers } from '../Classes/Drivers.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  FlipDriverStatus(DriverID: number): Observable<OperationResult> {
    return this.http.put<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.FLIP_DRIVER_STATUS +
        '/' +
        DriverID,
      {}
    );
  }
  AddDriver(Driver: Drivers): Observable<OperationResult> {
    console.log('Driver is here', Driver);
    return this.http.post<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.ADD_DRIVER,
      Driver
    );
  }
  UpdateDriver(Driver: Drivers): Observable<OperationResult> {
    return this.http.put<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.UPDATE_DRIVER,
      Driver
    );
  }

  FlipVehicleStatus(VehicleID: number): Observable<OperationResult> {
    return this.http.put<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.FLIP_VEHICLE_STATUS +
        '/' +
        VehicleID,
      {}
    );
  }
  AddVehicle(Vehicle: Vehicles): Observable<OperationResult> {
    return this.http.post<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.ADD_VEHICLE,
      Vehicle
    );
  }
  UpdateVehicle(Vehicle: Vehicles): Observable<OperationResult> {
    return this.http.put<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.UPDATE_VEHICLE,
      Vehicle
    );
  }
}
