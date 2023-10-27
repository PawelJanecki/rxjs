import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, interval, skip, takeUntil } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css'],
})
export class SkipComponent implements OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    console.log('start and skip first 3 emits...');
    const source = interval(1000);

    const skipExample = source.pipe(skip(3), takeUntil(this.destroyed$));

    skipExample.subscribe(console.log);
  }
}
