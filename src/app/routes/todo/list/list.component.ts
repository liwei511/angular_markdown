import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, SettingsService } from '@delon/theme';
import { STColumn, STComponent, STPage, STChange } from '@delon/abc';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html'
})
export class TodoListComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    private message: NzMessageService,
    private router: Router,
    private modalService: NzModalService,
    private settings: SettingsService
    ) { }

  ngOnInit() {
  }

  getData(page?, refresh = false) {
  }
}
