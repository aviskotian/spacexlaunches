import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getData(launchYear, launchSuccess, landSuccess) {
    let params = new HttpParams()
    if (launchYear != null) {
        params = params.set('launch_year', launchYear);
    }
    if (launchSuccess != null) {
        params = params.set('launch_success', launchSuccess);
    }
    if (landSuccess != null) {
      params = params.set('land_success', landSuccess);
    }
    return this.http.get(environment.baseApiURL, {
      params
    });
  }
}
