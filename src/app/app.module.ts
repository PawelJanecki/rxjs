import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { AjaxComponent } from './creators/ajax/ajax.component';
import { CreateComponent } from './creators/create/create.component';
import { DeferComponent } from './creators/defer/defer.component';
import { FromComponent } from './creators/from/from.component';
import { FromEventComponent } from './creators/from-event/from-event.component';
import { GenerateComponent } from './creators/generate/generate.component';
import { IntervalComponent } from './creators/interval/interval.component';
import { OfComponent } from './creators/of/of.component';
import { RangeComponent } from './creators/range/range.component';
import { ThrowComponent } from './creators/throw/throw.component';
import { TimerComponent } from './creators/timer/timer.component';
import { AuditComponent } from './filters/audit/audit.component';
import { DebounceComponent } from './filters/debounce/debounce.component';
import { FilterComponent } from './filters/filter/filter.component';
import { SkipComponent } from './filters/skip/skip.component';
import { SkipUntilComponent } from './filters/skip-until/skip-until.component';
import { SkipWhileComponent } from './filters/skip-while/skip-while.component';
import { FormsModule } from '@angular/forms';
import { TakeComponent } from './filters/take/take.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';
import { MapComponent } from './transformation/map/map.component';
import { MapToComponent } from './transformation/map-to/map-to.component';
import { MergeMapComponent } from './transformation/merge-map/merge-map.component';
import { ReduceComponent } from './transformation/reduce/reduce.component';
import { SwitchMapComponent } from './transformation/switch-map/switch-map.component';
import { CombineAllComponent } from './combinators/combine-all/combine-all.component';
import { ConcatComponent } from './combinators/concat/concat.component';
import { MergeComponent } from './combinators/merge/merge.component';
import { CombineLatestComponent } from './combinators/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './combinators/with-latest-from/with-latest-from.component';
import { StartWithComponent } from './combinators/start-with/start-with.component';
import { CatchComponent } from './error-handlers/catch/catch.component';
import { RetryComponent } from './error-handlers/retry/retry.component';

const ROUTES: Routes = [
  {
    path: 'subject',
    children: [
      {
        path: 'subject',
        component: SubjectComponent,
      },
      {
        path: 'behavior-subject',
        component: BehaviorSubjectComponent,
      },
      {
        path: 'replay-subject',
        component: ReplaySubjectComponent,
      },
    ],
  },
  {
    path: 'creator',
    children: [
      {
        path: 'ajax',
        component: AjaxComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'defer',
        component: DeferComponent,
      },
      {
        path: 'from',
        component: FromComponent,
      },
      {
        path: 'from-event',
        component: FromEventComponent,
      },
      {
        path: 'generate',
        component: GenerateComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'of',
        component: OfComponent,
      },
      {
        path: 'range',
        component: RangeComponent,
      },
      {
        path: 'throw',
        component: ThrowComponent,
      },
      {
        path: 'timer',
        component: TimerComponent,
      },
    ],
  },
  {
    path: 'filter',
    children: [
      {
        path: 'audit',
        component: AuditComponent,
      },
      {
        path: 'debounce',
        component: DebounceComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'skip',
        component: SkipComponent,
      },
      {
        path: 'skip-until',
        component: SkipUntilComponent,
      },
      {
        path: 'skip-while',
        component: SkipWhileComponent,
      },
      {
        path: 'take',
        component: TakeComponent,
      },
    ],
  },
  {
    path: 'transformation',
    children: [
      {
        path: 'concatMap',
        component: ConcatMapComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'mapTo',
        component: MapToComponent,
      },
      {
        path: 'mergeMap',
        component: MergeMapComponent,
      },
      {
        path: 'reduce',
        component: ReduceComponent,
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent,
      },
    ],
  },
  {
    path: 'combination',
    children: [
      {
        path: 'combineAll',
        component: CombineAllComponent,
      },
      {
        path: 'combineLatest',
        component: CombineLatestComponent,
      },
      {
        path: 'concat',
        component: ConcatComponent,
      },
      {
        path: 'merge',
        component: MergeComponent,
      },
      {
        path: 'startWith',
        component: StartWithComponent,
      },
      {
        path: 'withLatestFrom',
        component: WithLatestFromComponent,
      },
    ],
  },
  {
    path: 'errorHandler',
    children: [
      {
        path: 'catch',
        component: CatchComponent,
      },
      {
        path: 'retry',
        component: RetryComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AjaxComponent,
    CreateComponent,
    DeferComponent,
    FromComponent,
    GenerateComponent,
    IntervalComponent,
    OfComponent,
    RangeComponent,
    ThrowComponent,
    TimerComponent,
    AuditComponent,
    DebounceComponent,
    FilterComponent,
    SkipComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    TakeComponent,
    ConcatMapComponent,
    MergeMapComponent,
    ReduceComponent,
    SwitchMapComponent,
    CombineAllComponent,
    ConcatComponent,
    CombineLatestComponent,
    WithLatestFromComponent,
    StartWithComponent,
    CatchComponent,
    RetryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
