import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css'],
})
export class GenerateComponent {
  start() {
    const generate$ = generate(
      2,
      (x) => x <= 8,
      (x) => x + 3
    );

    generate$.subscribe(console.log);
  }

  start2() {
    const generate$ = generate(
      1,
      (x) => x < 7,
      (x) => x + 1,
      (x) => x + '.'.repeat(x)
    );

    generate$.subscribe(console.log);
  }
}
