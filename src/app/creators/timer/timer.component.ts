import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    const source = timer(2000, 1000).pipe(takeUntil(this.destroyed$), take(6));

    console.log('start and wait 2 seconds to first emit...');
    source.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed.'),
    });
  }
}
