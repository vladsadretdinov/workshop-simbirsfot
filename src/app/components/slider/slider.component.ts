import { Component, OnDestroy } from '@angular/core';
import { SLIDER_TIME_SWITCH } from './slider.const';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnDestroy {
  slide = '1';

  intervalId = setInterval(
    this.sliderClick.bind(this),
    SLIDER_TIME_SWITCH,
    'next',
    true,
  );

  sliderClick(dir = 'next', auto = false) {
    if (!auto) {
      clearInterval(this.intervalId);
    }
    if (dir === 'next') {
      const newValue = +this.slide + 1;
      this.slide = String(newValue > 4 ? 1 : newValue);
      return;
    }
    const newValue = +this.slide - 1;
    this.slide = String(newValue < 1 ? 4 : newValue);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
