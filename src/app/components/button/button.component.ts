import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('size') size: 'large' | 'medium' | undefined = undefined;
  @Input('theme') theme: 'green' | 'turquoise' | 'red' | 'purple' | undefined = undefined;

  classList: string = "";

  constructor() {
  }

  ngOnInit(): void {
    if (this.size) {
      this.classList += ` button_size_${this.size}`;
    }
    if (this.theme) {
      this.classList += ` button_theme_${this.theme}`;
    }
  }

}
