import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  fromArray() {
    console.clear();
    const arraySource = from([1, 2, 3, 4, 5]);
    const subscribe = arraySource.subscribe((val) => console.log(val));
  }

  fromPromise() {
    console.clear();
    const promiseSource = from(
      new Promise((resolve) => {
        console.log('  czekam...');
        setTimeout(() => {
          resolve('Hello world!');
        }, 1200);
      })
    );
    const subscribe = promiseSource.subscribe((val) => console.log(val));
  }

  fromCollection() {
    console.clear();
    const map = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');

    const mapSource = from(map);
    const subscribe = mapSource.subscribe((val) => console.log(val));
  }

  fromString() {
    console.clear();
    const source = from('Hello World');
    const subscribe = source.subscribe((val) => console.log(val));
  }
}
