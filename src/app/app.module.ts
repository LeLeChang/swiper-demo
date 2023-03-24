
import { WaterfallComponent } from './waterfall/waterfall.component';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, SliderComponent, WaterfallComponent, HomeComponent],
  imports: [BrowserModule, SwiperModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
