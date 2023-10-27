import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, filter, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    const source = interval(500).pipe(
      takeUntil(this.destroyed$),
      filter((val) => val % 2 === 0)
    );
    source.subscribe(console.log);
  }
}
