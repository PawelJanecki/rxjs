import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, interval, map, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css'],
})
export class WithLatestFromComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const source = interval(5000);
    const secondSource = interval(1000);

    const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First source (5s):  ${first}, second source (1s): ${second}`;
      })
    );

    const subs = example
      .pipe(takeUntil(this.destroyed$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
