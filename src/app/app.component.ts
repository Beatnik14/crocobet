import { SlotsFiltersService } from './slots/slots-navigation/services/slots-filters.service';
import { SlotsFilters } from './slots/models/slots-filters.model';
import { mergeMap, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { Component, OnInit } from '@angular/core';

import * as AppSelectors from './state/app.selectors';
import * as AppActions from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'crocobet';

  error$ = this.store.select(AppSelectors.getError);
  loading$ = this.store.select(AppSelectors.getLoading);

  constructor(
    private store: Store<AppState>,
    private slotsFiltersService: SlotsFiltersService
  ) {}

  ngOnInit(): void {
    const initialCategory = this.slotsFiltersService.getInitialSlotsFilter();
    this.store.dispatch(
      AppActions.loadSlotsByCategory({
        filter: initialCategory,
      })
    );
  }
}
