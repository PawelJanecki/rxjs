import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, of, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    console.log('Takes only 2 first values emitted from source..');
    const source = of(1, 2, 3, 4, 5);

    const example = source
      .pipe(takeUntil(this.destroyed$), take(2))
      .subscribe((x) => {
        console.log(x);
      });
  }
}
