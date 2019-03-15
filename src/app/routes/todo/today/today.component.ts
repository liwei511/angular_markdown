import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, SettingsService } from '@delon/theme';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-todo-today',
  templateUrl: './today.component.html',
})
export class TodoTodayComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    private message: NzMessageService,
    private modalService: NzModalService,
    private settings: SettingsService) { }

  ngOnInit() {
  }

  getData(page?) {
  }
}
