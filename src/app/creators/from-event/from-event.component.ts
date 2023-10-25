import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, fromEvent, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    const click$ = fromEvent(document, 'click');

    const example = click$.pipe(
      map((event) => `Event time: ${event.timeStamp}`),
      takeUntil(this.destroyed$)
    );

    const subscribe = example.subscribe({
      next: (val) => console.log(val),
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
