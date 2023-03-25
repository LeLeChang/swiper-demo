import {
  Component,
  Input,
} from '@angular/core';
import { SingleWaterfallInfo } from '../model/home/home';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RoutePaths } from '../route-paths';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.scss'],
})
export class WaterfallComponent {
  @Input() waterfall!: SingleWaterfallInfo;
  isTwoColumn: boolean = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        const breakPoints = result.breakpoints;
        this.isTwoColumn = true;

        if (breakPoints[Breakpoints.XSmall] || breakPoints[Breakpoints.Small]) {
          this.isTwoColumn = false;
        }
      });
  }

  productDetailUrl(productNo: string): string{
    return `/${RoutePaths.productDetail}/${productNo}`;
  }

}
