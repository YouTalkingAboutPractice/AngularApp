import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OperationResult } from '../Classes/OperationResult.interface';
import { Constants } from '../Constants/constants';
@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  GetDrivers(
    pageSize: number,
    pageNum: number,
    sortField: string,
    sortOrder: string,
    HMV: boolean,
    searchTerm: string
  ): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_DRIVERS +
        '?pageSize=' +
        pageSize +
        '&pageNum=' +
        pageNum +
        '&sortField=' +
        sortField +
        '&sortOrder=' +
        sortOrder +
        '&HMV=' +
        HMV +
        '&searchTerm=' +
        searchTerm
    );
  }
  GetTotalDrivers(searchTerm: string): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_DRIVER_COUNT +
        '?searchTerm=' +
        searchTerm
    );
  }
  GetVehicles(
    pageSize: number,
    pageNum: number,
    sortField: string,
    sortOrder: string,
    type: string,
    purpose: string,
    searchTerm: string
  ): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_VEHICLES +
        '?pageSize=' +
        pageSize +
        '&pageNum=' +
        pageNum +
        '&sortField=' +
        sortField +
        '&sortOrder=' +
        sortOrder +
        '&type=' +
        type +
        '&purpose=' +
        purpose +
        '&searchTerm=' +
        searchTerm
    );
  }
  GetTotalVehicles(searchTerm: string): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_VEHICLE_COUNT +
        '?searchTerm=' +
        searchTerm
    );
  }
  GetUnallocatedOrders(
    Date: string,
    pageNum: number,
    sortField: string,
    sortOrder: string
  ): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_UNALLOCATED_TRAVEL_ORDERS +
        '?Date=' +
        Date +
        '&pageNum=' +
        pageNum +
        '&sortField=' +
        sortField +
        '&sortOrder=' +
        sortOrder
    );
  }
  GetTotalTravelOrder(Date: string): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_TRAVEL_ORDER_COUNT +
        '?Date=' +
        Date
    );
  }
  GetAllocatedOrdersWithDate(Date: string): Observable<OperationResult> {
    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_ALLOCATED_ORDERS_WITH_DATE +
        '?Date=' +
        Date
    );
  }
}
