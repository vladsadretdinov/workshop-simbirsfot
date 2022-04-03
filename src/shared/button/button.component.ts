import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

export type Theme = 'default' | 'green' | 'turquoise' | 'red' | 'purple';
type Size = 'large' | 'medium';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() size: Size = 'medium';

  @Input() theme: Theme = 'default';

  classList: string = '';

  ngOnInit(): void {
    this.classList += ` button_size_${this.size}`;
    this.classList += ` button_theme_${this.theme}`;
  }
}
