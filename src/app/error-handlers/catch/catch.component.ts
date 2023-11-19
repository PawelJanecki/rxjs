import { Component, OnInit } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css'],
})
export class CatchComponent implements OnInit {
  ngOnInit(): void {
    const source = throwError(() => 'This is an error!');

    const example = source.pipe(catchError((val) => of(`I caught: ${val}`)));

    const subs = example.subscribe(console.log);
  }
}
