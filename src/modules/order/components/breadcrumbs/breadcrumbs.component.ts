import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  links = [{ name: 'Местоположение', path: 'location' }, { name: 'Модель' }, { name: 'Дополнительно' }, { name: 'Итого' }];
}
