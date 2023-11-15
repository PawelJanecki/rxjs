import { Component } from '@angular/core';
import { delay, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent {
  start() {
    console.log('start');
    const source = of(2000, 1000);

    const example = source
      .pipe(mergeMap((val) => of(`Delayed by: ${val}`).pipe(delay(val))))
      .subscribe({
        next: (val) => console.log(`With mergeMapL ${val}`),
        complete: () => console.log('complete.'),
      });
  }
}
