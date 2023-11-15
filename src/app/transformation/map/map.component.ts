import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  start() {
    const source = from([1, 2, 3, 4, 5]);

    const example = source.pipe(map((val) => val * 2));

    const subscribe = example.subscribe((val) => console.log(val));
  }
}
