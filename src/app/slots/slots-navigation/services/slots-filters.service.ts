import { SlotsFilters } from '../../models/slots-filters.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlotsFiltersService {
  private slotsFilters: SlotsFilters[] = [
    {
      iconPath: 'assets/slot-filters/best-seller.png',
      title: 'Top Slots',
      quantity: 25,
      disabled: false,
      apiName: 'პოპულარული / ვები',
      default: true,
    },
    {
      iconPath: 'assets/slot-filters/star (15).png',
      title: 'Favorites',
      quantity: 125,
      disabled: false,
      apiName: 'პოპულარული მთავარზე / ვები',
      default: true,
    },
    {
      iconPath: 'assets/slot-filters/new.png',
      title: 'New Games',
      quantity: 125,
      disabled: false,
      apiName: 'ახალი თამაშები',
      default: true,
    },
    {
      iconPath: 'assets/slot-filters/giftbox.png',
      title: 'Buy Bonuses',
      quantity: 125,
      disabled: false,
      apiName: 'BUY BONUS',
      default: true,
    },
    {
      iconPath: 'assets/slot-filters/history.png',
      title: 'History',
      quantity: 125,
      disabled: true,
      apiName: '',
      default: true,
    },
  ];

  getSlotsFilters(): SlotsFilters[] {
    return [...this.slotsFilters];
  }

  getInitialSlotsFilter() {
    return this.slotsFilters.find((filters) => filters.default);
  }
}
