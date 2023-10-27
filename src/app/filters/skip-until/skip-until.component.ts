import { Component } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  interval,
  skipUntil,
  takeUntil,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css'],
})
export class SkipUntilComponent {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    console.log(
      'Start emitting. Values will be skipped until another observable emitts (4 seconds)..'
    );
    const source = interval(1000);
    const skip$ = timer(4000);

    const skipExample = source.pipe(
      skipUntil(skip$),
      takeUntil(this.destroyed$)
    );

    skipExample.subscribe(console.log);
  }
}
