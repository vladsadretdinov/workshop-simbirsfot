import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() size: 'large' | 'medium' = 'medium';

  @Input() theme: 'default' | 'green' | 'turquoise' | 'red' | 'purple' =
    'default';

  classList: string = '';

  ngOnInit(): void {
    this.classList += ` button_size_${this.size}`;
    this.classList += ` button_theme_${this.theme}`;
  }
}
