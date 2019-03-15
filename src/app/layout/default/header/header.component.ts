import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: [
    `
    .hy-logo {
      width: 100px;
      float: left;
      text-align: center;
      line-height: 30px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      letter-spacing: 1px;
      color: #fff;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  searchToggleStatus: boolean;
  // appearance = [];
  constructor(public settings: SettingsService) {
    // setTimeout(() => {
    //   if (this.settings.user.appearance) {
    //     this.appearance = this.settings.user.appearance;
    //   }
    // }, 10);
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
