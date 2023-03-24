import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from '../../model/home/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  readonly homeUrl = 'apiUrl';

  constructor(private httpClient: HttpClient) {}

  getHomeData(): Observable<Home> {
    return this.httpClient.get<Home>(this.homeUrl);
  }
}
