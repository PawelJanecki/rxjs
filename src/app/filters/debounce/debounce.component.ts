import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, debounce, fromEvent, of, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css'],
})
export class DebounceComponent implements OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    const source = fromEvent(document, 'click');

    const debouncedExample = source.pipe(
      debounce(() => timer(2000)),
      takeUntil(this.destroyed$)
    );

    debouncedExample.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed.'),
    });
  }
}
