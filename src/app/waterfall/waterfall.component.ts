import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SingleWaterfallInfo } from '../model/home/home';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaterfallComponent {
  @Input() waterfall!: SingleWaterfallInfo;
}
