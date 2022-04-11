import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Price {
  location: {
    city: string | undefined | null;
    address: string | undefined | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  price$ = new BehaviorSubject<Price>({
    location: {
      city: undefined,
      address: undefined,
    },
  });
}
