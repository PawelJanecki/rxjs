import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent {
  sub = new BehaviorSubject(1);

  start() {
    this.sub.subscribe((x) => {
      console.log('Subscriber A: ', x);
    });
    this.sub.subscribe((x) => {
      console.log('Subscriber B: ', x);
    });

    console.log('next: 2');
    this.sub.next(2);

    this.sub.subscribe((x) => {
      console.log('Subscriber C: ', x);
    });

    console.log('next: 3');
    this.sub.next(3);

    this.sub.complete();
  }
}
