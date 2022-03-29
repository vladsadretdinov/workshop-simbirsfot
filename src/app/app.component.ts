import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Temporary solution in favor of BEM
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  menu_show = true;

  slide = '1';

  intervalId = setInterval(this.sliderClick.bind(this), 5000, 'next', true);

  menuClick() {
    this.menu_show = !this.menu_show;
  }

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
