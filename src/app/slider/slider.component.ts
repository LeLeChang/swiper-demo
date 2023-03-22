import { Component, OnDestroy, OnInit } from "@angular/core";
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from "swiper";

import { SliderService } from "./service/slider.service";
import { Slider } from "./service/slider-info";
import { Subject, takeUntil, tap } from "rxjs";

Swiper.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit, OnDestroy {
  sliders: Slider[] = [];
  destroy$ = new Subject<void>();

  readonly config: SwiperOptions = {
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
    this.getSliders();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getSliders(): void {
    this.sliderService
      .getSliders()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          if (!result || !result.sliders) {
            this.sliders = [];
            return;
          }
          this.sliders = result.sliders;
        },
        error: (err) => console.log("Get Sliders Error"),
      });
  }
}
