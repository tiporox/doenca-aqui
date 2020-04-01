import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { SessionService } from '../@core/utils/session.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu;

  constructor(
    private session: SessionService,
  ) {
    this.session.put("menu", MENU_ITEMS);
    this.menu = this.session.get("menu");
  }
}
