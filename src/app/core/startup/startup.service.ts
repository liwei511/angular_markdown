import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MenuService,
  SettingsService,
  TitleService,
} from '@delon/theme';
import { ACLService } from '@delon/acl';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { environment } from '@env/environment';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  // private viaHttp(resolve: any, reject: any) {
  //   zip(
  //     this.httpClient.get('assets/tmp/app-data.json')
  //   ).pipe(
  //     // 接收其他拦截器后产生的异常消息
  //     catchError(([appData]) => {
  //       resolve(null);
  //       return [appData];
  //     })
  //   ).subscribe(([appData]) => {

  //     // application data
  //     const res: any = appData;
  //     // 应用信息：包括站点名、描述、年份
  //     this.settingService.setApp(res.app);
  //     // 用户信息：包括姓名、头像、邮箱地址
  //     this.settingService.setUser(res.user);
  //     // ACL：设置权限为全量
  //     this.aclService.setFull(true);
  //     // 初始化菜单
  //     this.menuService.add(res.menu);
  //     // 设置页面标题的后缀
  //     this.titleService.suffix = res.app.name;
  //   },
  //     () => { },
  //     () => {
  //       resolve(null);
  //     });
  // }
  private viaMock(resolve: any, reject: any) {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   resolve({});
    //   return;
    // }
    // mock

    const app: any = {
      name: `华影聚合`,
      description: `华影聚合办公协作平台`,
    };
    this.httpClient
      .get(environment.SERVER_URL + '/user/info_my_account')
      .subscribe(res => {
        const accountInfo = res['result'];
        const user: any = {
          name: accountInfo['name'],
          account: accountInfo['account'],
          avatar: './assets/tmp/img/avatar.jpg',
          email: accountInfo['account'] + '@huayingjuhe.com',
          roles: accountInfo['roles'],
        };
        // 应用信息：包括站点名、描述、年份
        this.settingService.setApp(app);
        // 用户信息：包括姓名、头像、邮箱地址
        this.settingService.setUser(user);
        // ACL：设置权限为全量
        this.aclService.setFull(true);
        // 初始化菜单
        this.menuService.add([
          {
            text: '任务',
            group: true,
            children: [
              {
                text: '我的一天',
                link: '/todo/today',
                icon: { type: 'icon', value: 'appstore' },
              },
              // {
              //   text: '重要',
              //   link: '/contract/list',
              //   icon: { type: 'icon', value: 'appstore' },
              // },
              {
                text: '已计划日程',
                link: '/todo/schedule',
                icon: { type: 'icon', value: 'appstore' },
              },
              {
                text: '任务',
                link: '/todo/task',
                icon: { type: 'icon', value: 'appstore' },
              },
              // {
              //   text: '回收站',
              //   link: '/contract/recycled',
              //   icon: { type: 'icon', value: 'delete' },
              //   shortcutRoot: true
              // }
            ],
          },
        ]);
      });
    this.titleService.suffix = app.name;
    this.titleService.default = 'work';
    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMock(resolve, reject);
    });
  }
}
