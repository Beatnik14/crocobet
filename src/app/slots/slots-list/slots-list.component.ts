import { SlotsFiltersService } from './../slots-navigation/services/slots-filters.service';
import { mergeMap, map } from 'rxjs';
import { ApiService } from './../slots-navigation/services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import * as AppActions from '../../state/app.actions';
import * as AppSelectors from '../../state/app.selectors';

@Component({
  selector: 'app-slots-list',
  templateUrl: './slots-list.component.html',
  styleUrls: ['./slots-list.component.scss'],
})
export class SlotsListComponent implements OnInit {
  slots$ = this.store.select(AppSelectors.getSlots);

  constructor(
    private store: Store<AppState>,
    private slotsFiltersService: SlotsFiltersService
  ) {}

  ngOnInit(): void {
    // this.store.dispatch(
    //   AppActions.loadSlotsByCategory({
    //     filter: {
    //       iconPath: 'assets/slot-filters/best-seller.png',
    //       title: 'Top Slots',
    //       quantity: 25,
    //       disabled: false,
    //       apiName: 'პოპულარული მთავარზე / ვები',
    //     },
    //   })
    // );
    // this.store
    // .select(AppSelectors.getSelectedCategory)
    // .pipe(
    //   mergeMap((category) =>
    //     this.slotsFiltersService
    //       .getSlotsFilter(category)
    //       .pipe(
    //         map((slotFilter) =>
    //           this.store.dispatch(
    //             AppActions.loadSlotsByCategory({ filter: slotFilter })
    //           )
    //         )
    //       )
    //   )
    // )
  }
}
