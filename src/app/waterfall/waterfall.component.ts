import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { SingleWaterfallInfo } from '../model/home/home';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaterfallComponent {
  @Input() waterfall!: SingleWaterfallInfo;
  isTwoColumn$ = new BehaviorSubject(true);

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        const breakPoints = result.breakpoints;

        if (breakPoints[Breakpoints.XSmall] || breakPoints[Breakpoints.Small]) {
          this.isTwoColumn$.next(false);
        }else{
          this.isTwoColumn$.next(true);
        }
      });
  }
}
