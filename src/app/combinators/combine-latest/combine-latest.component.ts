import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, combineLatest, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    combineLatest(timerOne$, timerTwo$, timerThree$)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([timerOneValue, timerTwoValue, timerThreeValue]) => {
        console.log(
          `TimerOne value: ${timerOneValue}, TimerTwo value: ${timerTwoValue}, TimerThree value: ${timerThreeValue}`
        );
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
