import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ReplaySubject,
  interval,
  mergeMap,
  of,
  retry,
  takeUntil,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const source = interval(1000);
    const example = source.pipe(
      mergeMap((val) => {
        if (val > 3) return throwError(() => 'Error!');
        return of(val);
      }),
      retry(2)
    );

    const subs = example.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (val) => console.log(val),
      error: (val) => console.log(`${val}: Retried 2 times then quit!`),
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
