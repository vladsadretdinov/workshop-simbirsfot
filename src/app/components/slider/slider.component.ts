import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnDestroy {
  slide = '1';

  intervalId = setInterval(this.sliderClick.bind(this), 5000, 'next', true);

  sliderClick(dir = 'next', auto = false) {
    if (auto !== true) {
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
