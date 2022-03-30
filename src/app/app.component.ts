import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu_show = true;

  menuClick() {
    this.menu_show = !this.menu_show;
  }
}
