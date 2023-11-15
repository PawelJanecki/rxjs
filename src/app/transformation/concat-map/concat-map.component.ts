import { Component } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent {
  start() {
    console.log('start...');
    const source = of(2000, 1000);

    const example = source.pipe(
      concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );

    example.subscribe({
      next: (val) => console.log(`With concatMap: ${val}`),
      complete: () => console.log('finish.'),
    });
  }
}
