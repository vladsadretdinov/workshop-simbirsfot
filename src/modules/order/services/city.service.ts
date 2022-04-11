import { Observable } from 'rxjs';
import { ICityGetResponse, ICityPointsResponse } from './../interfaces/table.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities(): Observable<ICityGetResponse> {
    const options = { params: new HttpParams().set('sort[name]', 1) };
    return this.http.get<ICityGetResponse>(`${environment.apiUrl}/db/city`, options);
  }

  getCityPoints(id: string): Observable<ICityPointsResponse> {
    const options = { params: new HttpParams().set('cityId', id) };
    return this.http.get<ICityPointsResponse>(`${environment.apiUrl}/db/point`, options);
  }
}
