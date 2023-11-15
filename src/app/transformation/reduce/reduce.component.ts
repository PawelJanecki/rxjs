import { Component } from '@angular/core';
import { of, reduce } from 'rxjs';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css'],
})
export class ReduceComponent {
  start() {
    console.log('start');

    const source = of(1, 2, 3, 4);

    const example = source
      .pipe(reduce((acc, curr) => acc + curr))
      .subscribe((val) => console.log('Sum: ', val));
  }
}
