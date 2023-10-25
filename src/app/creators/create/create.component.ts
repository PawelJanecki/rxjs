import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  start() {
    const hello = Observable.create((observer: any) => {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });

    const subscribe = hello.subscribe((val: any) => console.log(val));
  }
}
