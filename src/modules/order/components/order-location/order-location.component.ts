import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CityService } from '../../services/city.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map, pluck, reduce, shareReplay, switchMap } from 'rxjs/operators';
import { ICityGetResponseItem } from '../../interfaces/table.interface';
import { PriceService } from '../../services/price.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-order-location',
  templateUrl: './order-location.component.html',
  styleUrls: ['./order-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderLocationComponent implements OnInit {
  cities$ = new BehaviorSubject<ICityGetResponseItem[]>([]);

  cityNames$ = new BehaviorSubject<string[]>([]);

  points$ = new BehaviorSubject<string[]>([]);

  citiesSubscription!: Subscription;

  cityNamesSubscription!: Subscription;

  pointsSubscription!: Subscription;

  constructor(private cityService: CityService, private priceService: PriceService) {}

  ngOnInit() {
    const cities$ = this.cityService.getCities().pipe(shareReplay());

    const citiesSubscription = cities$.pipe(pluck('data'));

    const cityNamesSubscription = citiesSubscription.pipe(
      switchMap(cities => cities),
      map(city => city.name),
      reduce((acc, val) => {
        acc.push(val);
        return acc;
      }, new Array<string>()),
    );

    this.citiesSubscription = citiesSubscription.subscribe(cities => this.cities$.next(cities));
    this.cityNamesSubscription = cityNamesSubscription.subscribe(cityNames => this.cityNames$.next(cityNames));
  }

  citySelect(value: string) {
    const matchedCity = this.cities$.value.find(city => city.name === value);
    if (matchedCity?.id) {
      this.pointsSubscription = this.cityService.getCityPoints(matchedCity.id).subscribe(response => {
        this.points$.next(response.data.map(row => row.address));
      });

      this.priceService.price$.next({
        ...this.priceService.price$.getValue(),
        location: {
          city: value,
          address: undefined,
        },
      });
    }
  }
}
