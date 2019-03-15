import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TodoRoutingModule } from './Todo-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { TodoEditorComponent } from './editor/editor.component';
import { TodoListComponent } from './list/list.component';
import { TodoTodayComponent } from './today/today.component';
import { TodoTaskComponent } from './task/task.component';
import { TodoScheduleComponent } from './schedule/schedule.component';
import { CanLeaveProvide } from './editor/can-leave.provide';

const COMPONENTS = [
  TodoTodayComponent,
  TodoTaskComponent,
  TodoScheduleComponent
];
const COMPONENTS_NOROUNT = [
  TodoEditorComponent,
  TodoListComponent
];

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [CanLeaveProvide],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TodoModule { }
