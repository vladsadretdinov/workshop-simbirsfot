import { Component, OnDestroy } from '@angular/core';
import { SLIDER_TIME_SWITCH, SLIDES } from './slider.const';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnDestroy {
  slides = SLIDES;

  currentSlide = 0;

  intervalId = setInterval(this.sliderClick.bind(this), SLIDER_TIME_SWITCH, true, true);

  sliderClick(next = true, auto = false) {
    if (!auto) {
      clearInterval(this.intervalId);
    }
    if (next) {
      const newValue = this.currentSlide + 1;
      this.currentSlide = newValue > SLIDES.length - 1 ? 0 : newValue;
      return;
    }
    const newValue = +this.currentSlide - 1;
    this.currentSlide = newValue < 0 ? SLIDES.length - 1 : newValue;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
