import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTodayComponent } from './today/today.component';
import { TodoTaskComponent } from './task/task.component';
import { TodoScheduleComponent } from './schedule/schedule.component';
// import { CanLeaveProvide } from './editor/can-leave.provide';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodoTodayComponent },
  // {
  //   path: 'edit/:id',
  //   component: ContractListEditComponent,
  //   canDeactivate: [CanLeaveProvide],
  // },
  { path: 'task', component: TodoTaskComponent },
  { path: 'schedule', component: TodoScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
