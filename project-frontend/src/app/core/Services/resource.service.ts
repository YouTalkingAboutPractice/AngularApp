import { HttpClient, HttpParams } from '@angular/common/http';
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
    let Params = new HttpParams();
    Params = Params.set('pageSize', pageSize);
    Params = Params.set('pageNum', pageNum);
    Params = Params.set('sortField', sortField);
    Params = Params.set('sortOrder', sortOrder);
    Params = Params.set('HMV', HMV);
    Params = Params.set('searchTerm', searchTerm);
    return this.http.get<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.GET_DRIVERS,
      { params: Params }
    );
  }
  GetTotalDrivers(searchTerm: string): Observable<OperationResult> {
    let Params = new HttpParams();
    Params = Params.set('searchTerm', searchTerm);
    return this.http.get<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.GET_DRIVER_COUNT,
      { params: Params }
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
    let Params = new HttpParams();
    Params = Params.set('pageSize', pageSize);
    Params = Params.set('pageNum', pageNum);
    Params = Params.set('sortField', sortField);
    Params = Params.set('sortOrder', sortOrder);
    Params = Params.set('type', type);
    Params = Params.set('purpose', purpose);
    Params = Params.set('searchTerm', searchTerm);

    return this.http.get<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.GET_VEHICLES,
      { params: Params }
    );
  }
  GetTotalVehicles(searchTerm: string): Observable<OperationResult> {
    let Params = new HttpParams();
    Params = Params.set('searchTerm', searchTerm);

    return this.http.get<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.GET_VEHICLE_COUNT,
      { params: Params }
    );
  }
  GetUnallocatedOrders(
    Date: string,
    pageNum: number,
    sortField: string,
    sortOrder: string
  ): Observable<OperationResult> {
    let Params = new HttpParams();
    Params = Params.set('Date', Date);
    Params = Params.set('pageNum', pageNum);
    Params = Params.set('sortField', sortField);
    Params = Params.set('sortOrder', sortOrder);

    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_UNALLOCATED_TRAVEL_ORDERS,
      { params: Params }
    );
  }
  GetTotalTravelOrder(Date: string): Observable<OperationResult> {
    let Params = new HttpParams();
    Params = Params.set('Date', Date);

    return this.http.get<OperationResult>(
      environment.api_url + Constants.API_ENDPOINT.GET_TRAVEL_ORDER_COUNT,
      { params: Params }
    );
  }
  GetAllocatedOrdersWithDate(Date: string): Observable<OperationResult> {
    let Params = new HttpParams();
    Params = Params.set('Date', Date);

    return this.http.get<OperationResult>(
      environment.api_url +
        Constants.API_ENDPOINT.GET_ALLOCATED_ORDERS_WITH_DATE,
      { params: Params }
    );
  }
}
