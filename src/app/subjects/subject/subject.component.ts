import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent {
  sub = new Subject();

  start() {
    this.sub.next(1);
    this.sub.subscribe((x) => {
      console.log('Subscriber A: ', x);
    });

    this.sub.next(2);
    this.sub.subscribe((x) => {
      console.log('Subscriber B: ', x);
    });

    this.sub.next(3);
    this.sub.complete();
  }
}
