import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, fromEvent, mapTo, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css'],
})
export class MapToComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const source = fromEvent(document, 'click');

    const example = source.pipe(mapTo('Hello World!'));

    example
      .pipe(takeUntil(this.destroyed$))
      .subscribe((val) => console.log(val));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
