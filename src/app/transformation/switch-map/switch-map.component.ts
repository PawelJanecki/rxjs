import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, fromEvent, interval, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const source = fromEvent(document, 'click')
      .pipe(switchMap(() => interval(1000)))
      .pipe(takeUntil(this.destroyed$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
