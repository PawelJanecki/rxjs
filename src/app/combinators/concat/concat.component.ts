import { Component, OnInit } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  ngOnInit(): void {
    const source = concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));

    source.subscribe(console.log);
  }
}
