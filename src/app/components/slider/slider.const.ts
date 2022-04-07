import { Theme } from '../../../modules/shared/button/button.component';

const SLIDER_TIME_SWITCH = 5000;

type ISlide = {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
  buttonTheme: Theme;
};

const SLIDES: ISlide[] = [
  {
    img: { src: 'assets/img/slider/1.jpg', alt: 'Parking' },
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    buttonTheme: 'green',
  },
  {
    img: { src: 'assets/img/slider/2.png', alt: 'Insurance' },
    title: 'Страховка',
    text: 'Полная страховка страховка автомобиля.',
    buttonTheme: 'turquoise',
  },
  {
    img: { src: 'assets/img/slider/3.png', alt: 'Petrol' },
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт.',
    buttonTheme: 'red',
  },
  {
    img: { src: 'assets/img/slider/4.png', alt: 'Service' },
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО.',
    buttonTheme: 'purple',
  },
];

export { SLIDER_TIME_SWITCH, SLIDES };
