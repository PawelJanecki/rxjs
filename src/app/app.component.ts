import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Navbar {
  label: string;
  links: Link[];
}

interface Link {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';

  nav: Navbar[] = [
    {
      label: 'Subjects',
      links: [
        { label: 'Subject', route: 'subject/subject' },
        { label: 'BehaviorSubject', route: 'subject/behavior-subject' },
        { label: 'ReplaySubject', route: 'subject/replay-subject' },
      ],
    },
    {
      label: 'Creators',
      links: [
        { label: 'ajax', route: 'creator/ajax' },
        { label: 'create', route: 'creator/create' },
        { label: 'defer', route: 'creator/defer' },
        { label: 'from', route: 'creator/from' },
        { label: 'generate', route: 'creator/generate' },
        { label: 'interval', route: 'creator/interval' },
        { label: 'of', route: 'creator/of' },
        { label: 'range', route: 'creator/range' },
        { label: 'throw', route: 'creator/throw' },
        { label: 'timer', route: 'creator/timer' },
      ],
    },
    {
      label: 'Filters',
      links: [
        { label: 'audit', route: 'filter/audit' },
        // { label: 'auditTime', route: 'filter/auditTime' },
        { label: 'debounce', route: 'filter/debounce' },
        // { label: 'debounceTime', route: 'filter/debounceTime' },
        // { label: 'distinct', route: 'filter/distinct' },
        // { label: 'distinctUntilChanged', route: 'filter/distinctUntilChanged' },
        // {
        //   label: 'distinctUntilKeyChanged',
        //   route: 'filter/distinctUntilKeyChanged',
        // },
        { label: 'filter', route: 'filter/filter' },
        // { label: 'find', route: 'filter/find' },
        // { label: 'first', route: 'filter/first' },
        // { label: 'ignoreElements', route: 'filter/ignoreElements' },
        // { label: 'last', route: 'filter/last' },
        // { label: 'sample', route: 'filter/sample' },
        // { label: 'single', route: 'filter/single' },
        { label: 'skip', route: 'filter/skip' },
        { label: 'skipUntil', route: 'filter/skip-until' },
        { label: 'skipWhile', route: 'filter/skip-while' },
        // { label: 'take', route: 'filter/take' },
        // { label: 'takeLast', route: 'filter/takeLast' },
        // { label: 'takeUntil', route: 'filter/takeUntil' },
        // { label: 'takeWhile', route: 'filter/takeWhile' },
        // { label: 'throttle', route: 'filter/throttle' },
        // { label: 'throttleTime', route: 'filter/throttleTime' },
      ],
    },
  ];

  constructor(private router: Router) {}

  changeOfRoutes() {
    console.clear();
  }
}
