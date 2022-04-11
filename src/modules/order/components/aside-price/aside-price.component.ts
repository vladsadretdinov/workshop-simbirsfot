import { BehaviorSubject, Subscription } from 'rxjs';
import { PriceService } from './../../services/price.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-aside-price',
  templateUrl: './aside-price.component.html',
  styleUrls: ['./aside-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsidePriceComponent implements OnInit {
  city$ = new BehaviorSubject<string | null | undefined>(undefined);

  address$ = new BehaviorSubject<string | null | undefined>(undefined);

  priceSubscription!: Subscription;

  constructor(private priceService: PriceService) {}

  ngOnInit() {
    this.priceSubscription = this.priceService.price$.subscribe(price => {
      this.city$.next(price.location.city);
    });
  }
}
