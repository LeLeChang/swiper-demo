import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from '../slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { WaterfallComponent } from '../waterfall/waterfall.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, WaterfallComponent],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
