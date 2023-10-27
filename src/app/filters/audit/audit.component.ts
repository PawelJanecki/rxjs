import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, audit, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css'],
})
export class AuditComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit() {
    const source = fromEvent(document, 'click');
    const result = source.pipe(
      audit((ev) => interval(1000)),
      takeUntil(this.destroyed$)
    );

    result.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
