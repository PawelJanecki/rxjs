import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    const source = interval(1000).pipe(takeUntil(this.destroyed$));

    source.subscribe(console.log);
  }
}
