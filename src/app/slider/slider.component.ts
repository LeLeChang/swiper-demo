import { ImageLinkBase } from '../model/home/image-link-base';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

Swiper.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input() sliders: ImageLinkBase[] = [];

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
}
