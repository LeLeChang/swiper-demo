import { Injectable } from '@angular/core';
import { SliderInfo } from "./slider-info";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  getSliders(): Observable<SliderInfo[]> {
    const sliderInfo: SliderInfo[] = [
      {
        id: 1,
        img: 'https://s2.lativ.com.tw/i/ProductShow/60187_1P168_1180X630_230313_TW.jpg',
        url: 'https://www.lativ.com.tw/OnSale/50DUP/WOMEN',
        alt: '測試1'
      },{
        id: 2,
        img: 'https://s3.lativ.com.tw/i/ProductShow/60221_POLO_1180X630_230309_TW.jpg',
        url: 'https://www.lativ.com.tw/Search/Index?keyWord=POLO&u=60221+60777+60228+60223+60227&category=men&display=md&mode=model',
        alt: '測試2'
      },{
        id: 3,
        img: 'https://s1.lativ.com.tw/i/ProductShow/58737_58872_58940_58927_59122_58985_59128_59127_58739_1P5D_1180X630_230315_TW2.jpg',
        url: 'https://www.lativ.com.tw/OnSale/SALE/KIDS',
        alt: '測試3'
      }
    ];

    return of(sliderInfo);
  }
}
