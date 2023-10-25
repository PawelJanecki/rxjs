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

const ROUTES: Routes = [
  {
    path: 'subjects',
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
    path: 'creators',
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
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
