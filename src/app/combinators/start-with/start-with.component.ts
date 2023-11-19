import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css'],
})
export class StartWithComponent implements OnInit {
  ngOnInit(): void {
    const source = of(1, 2, 3);

    const example = source.pipe(startWith(0));

    const subs = example.subscribe(console.log);
  }
}
