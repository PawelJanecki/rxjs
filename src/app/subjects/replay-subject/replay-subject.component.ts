import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent {
  sub = new ReplaySubject();

  start() {
    console.log('next: 1');
    this.sub.next(1);
    console.log('next: 2');
    this.sub.next(2);

    console.log('new Subscriber A');
    this.sub.subscribe((x) => {
      console.log('Subscriber A: ', x);
    });

    console.log('next: 3');
    this.sub.next(3);
    console.log('next: 4');
    this.sub.next(4);

    console.log('new Subscriber B');
    this.sub.subscribe((x) => {
      console.log('Subscriber B: ', x);
    });

    console.log('next: 5');
    this.sub.next(5);
    console.log('next: 6');
    this.sub.next(6);

    console.log('new Subscriber C');
    this.sub.subscribe((x) => {
      console.log('Subscriber C: ', x);
    });

    this.sub.complete();
  }
}
