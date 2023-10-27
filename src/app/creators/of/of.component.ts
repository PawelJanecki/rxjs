import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent {
  start() {
    const source = of(1, 2, 3, 4, 5);

    source.subscribe({
      next: (val) => console.log('val: ', val),
      complete: () => console.log('Completed.'),
    });
  }
}
