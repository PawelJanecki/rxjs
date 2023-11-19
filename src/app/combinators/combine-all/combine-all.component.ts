import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ReplaySubject,
  combineLatestAll,
  fromEvent,
  interval,
  map,
  take,
} from 'rxjs';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.css'],
})
export class CombineAllComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      map(() => interval(Math.random() * 2000).pipe(take(3))),
      take(2)
    );
    const result = higherOrder.pipe(combineLatestAll());

    result.subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
