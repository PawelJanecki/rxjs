import { Component } from '@angular/core';
import { defer, finalize, map, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css'],
})
export class DeferComponent {
  start_of() {
    console.log('start: of');
    const now$ = of(new Date());

    now$.subscribe(console.log);

    setTimeout(() => {
      now$.subscribe(console.log);
      console.log('end: of');
    }, 1000);
  }

  start_defer() {
    console.log('start: defer');
    const now$ = defer(() => of(new Date()));

    now$.subscribe(console.log);

    setTimeout(() => {
      now$.subscribe(console.log);
      console.log('end: defer');
    }, 1000);
  }

  deferBeforeSubs() {
    const counter$ = timer(0, 1_000).pipe(
      take(10),
      map((i) => 10 - i)
    );

    const coutnerWithLogs$ = defer(() => {
      console.log('Counter has been started');
      return counter$;
    }).pipe(finalize(() => console.log('Counter has been stopped')));

    coutnerWithLogs$.subscribe(console.log);
  }
}
