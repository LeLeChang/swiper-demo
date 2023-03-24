import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../model/home/home';
import { HomeService } from './service/homeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeData$!: Observable<Home>;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeData$ = this.homeService.getHomeData();
  }
}
