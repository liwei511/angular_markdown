import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoEditorComponent } from './editor.component';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class CanLeaveProvide implements CanDeactivate<TodoEditorComponent> {
  constructor(private confirmSrv: NzModalService) {}

  canDeactivate(
    component: TodoEditorComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component.canLeave) {
      return new Observable(observer => {
        observer.next(true);
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.confirmSrv.confirm({
          nzTitle: '确认要离开吗？',
          nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
          nzOkText: '离开',
          nzCancelText: '取消',
          nzOnOk: () => {
            observer.next(true);
            observer.complete();
          },
          nzOnCancel: () => {
            observer.next(false);
            observer.complete();
          },
        });
      });
    }
  }
}
