import { Injectable } from "@angular/core";
import { ListSliderResponse } from "./slider-info";
import { map, tap, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SliderService {
  readonly apiUrl = "apiUrl";

  constructor(private httpClient: HttpClient) {}

  getSliders(): Observable<ListSliderResponse> {
    return this.httpClient.get<ListSliderResponse>(this.apiUrl).pipe(
      tap((r) => console.log(r)),
      map((res) => ListSliderResponse.fromJson(res)),
      tap((r) => console.log(r))
    );
  }
}
