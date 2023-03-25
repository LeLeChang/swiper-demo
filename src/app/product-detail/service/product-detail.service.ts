import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInfo } from '../../model/home/image-link-base';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  readonly productDetailUrl = 'detailUrl';

  constructor(private httpClient: HttpClient) {}

  getProductDetail(productNo: string): Observable<ProductInfo>{
    const getUrl = `${this.productDetailUrl}${productNo}`;

    return this.httpClient.get<ProductInfo>(getUrl);
  }
}
