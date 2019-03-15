import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'header-icon',
  template: `
  <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
    <div class="alain-default__nav-item" nz-dropdown>
      <i class="anticon anticon-appstore"></i>
    </div>
    <div nz-menu class="wd-xl animated jello">
      <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
        <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
          <div nz-col [nzSpan]="6">
            <i class="anticon anticon-calendar bg-error text-white"></i>
            <small>日历</small>
          </div>
          <div nz-col [nzSpan]="6">
            <i class="anticon anticon-file bg-geekblue text-white"></i>
            <small>文件</small>
          </div>
          <div nz-col [nzSpan]="6">
            <i class="anticon anticon-cloud bg-success text-white"></i>
            <small>网盘</small>
          </div>
          <div nz-col [nzSpan]="6">
            <i class="anticon anticon-team bg-purple text-white"></i>
            <small>团队</small>
          </div>
          <div nz-col [nzSpan]="6">
            <i class="anticon anticon-scan bg-warning text-white"></i>
            <small>QR</small>
          </div>
        </div>
      </nz-spin>
    </div>
  </nz-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderIconComponent {
  loading = true;

  constructor(private cdr: ChangeDetectorRef) { }

  change() {
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 500);
  }
}
