import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-order-location',
  templateUrl: './order-location.component.html',
  styleUrls: ['./order-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderLocationComponent implements OnInit {
  @ViewChild('cityInput') cityInput!: ElementRef<HTMLInputElement>;

  @ViewChild('cityList') cityList!: ElementRef<HTMLInputElement>;

  cities: string[] = [];

  points: string[] = [];

  constructor(private renderer: Renderer2, private cityService: CityService) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.cityInput.nativeElement && e.target !== this.cityList.nativeElement) {
        this.cityList.nativeElement.classList.remove('main__input-list_opened');
      }
    });

    this.cityService.getCities().subscribe(response => (this.cities = response.data.map(e => e.name)));
  }

  clearCityInput() {
    this.cityInput.nativeElement.value = '';
    this.cityList.nativeElement.classList.remove('main__input-list_opened');
  }

  setCityInput(event: Event) {
    this.cityInput.nativeElement.value = (event.target as HTMLInputElement).title;
    this.cityList.nativeElement.classList.remove('main__input-list_opened');
  }

  cityClick() {
    this.cityList.nativeElement.classList.add('main__input-list_opened');
  }
}
