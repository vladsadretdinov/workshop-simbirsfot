import { Observable } from 'rxjs';
import { IGetResponse } from './../interfaces/table.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities(): // request: IGet = {}
  Observable<IGetResponse> {
    const options = { params: new HttpParams().set('sort[name]', 1) };
    // new HttpParams({ fromObject: { ...request } });
    return this.http.get<IGetResponse>(`${environment.apiUrl}/db/city`, options);
  }
}
