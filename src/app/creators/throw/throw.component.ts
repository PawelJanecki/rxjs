import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.css'],
})
export class ThrowComponent {
  start() {
    const source = throwError(() => new Error('Thrown error.'));

    source.subscribe({
      error: (err) => console.log(err),
    });
  }
}
