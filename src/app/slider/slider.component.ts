import { Component, OnInit } from '@angular/core';
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

import { SliderService } from './service/slider.service';
import { SliderInfo } from './service/slider-info';

Swiper.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  sliderInfo: SliderInfo[] = [];
  config: SwiperOptions = {
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    autoHeight: true,
    loop: true,
  };

  constructor(private sliderService: SliderService) {}

  ngOnInit() {
    this.getSliderInfo();
  }

  getSliderInfo(): void {
    this.sliderService
      .getSliders()
      .subscribe((sliderInfo) => (this.sliderInfo = sliderInfo));
  }
}
