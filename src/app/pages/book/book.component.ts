import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @ViewChild('cityInput') cityInput!: ElementRef<HTMLInputElement>;

  @ViewChild('cityList') cityList!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.cityInput.nativeElement && e.target !== this.cityList.nativeElement) {
        this.cityList.nativeElement.classList.remove('main__input-list_opened');
      }
    });
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
