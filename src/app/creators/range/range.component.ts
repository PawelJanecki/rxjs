import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
})
export class RangeComponent {
  start() {
    const source = range(1, 8);

    source.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed.'),
    });
  }
}
