import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, skipWhile, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css'],
})
export class SkipWhileComponent implements OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);
  skip = true;

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  start() {
    console.log('Emitter started...');
    const source = timer(0, 500);

    const result = source.pipe(
      skipWhile((val) => this.skip),
      takeUntil(this.destroyed$)
    );

    result.subscribe(console.log);
  }
}
