import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, interval, mapTo, merge, takeUntil } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const first = interval(2500);
    const second = interval(2000);
    const third = interval(700);
    const fourth = interval(1300);

    const example = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD!')),
      fourth.pipe(mapTo('FOURTH!'))
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
