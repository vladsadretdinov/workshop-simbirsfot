import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  @Input() menuShow = false;

  @Output() menuShowClick = new EventEmitter<boolean>();

  menuClick() {
    this.menuShowClick.emit(!this.menuShow);
  }
}
