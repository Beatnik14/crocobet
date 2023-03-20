import { AppState } from './../../state/app.state';
import { SlotsFilters } from './../models/slots-filters.model';
import { SlotsFiltersService } from './services/slots-filters.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppActions from '../../state/app.actions';
import * as AppSelectors from '../../state/app.selectors';

@Component({
  selector: 'app-slots-navigation',
  templateUrl: './slots-navigation.component.html',
  styleUrls: ['./slots-navigation.component.scss'],
})
export class SlotsNavigationComponent implements OnInit {
  slotsFilters: SlotsFilters[];
  providersListExtended = false;
  selectedCategory$ = this.store.select(AppSelectors.getSelectedCategory);
  selectedProvider$ = this.store.select(AppSelectors.getSelectedProvider);
  providers$ = this.store.select(AppSelectors.getProviders);

  constructor(
    private slotsFiltersService: SlotsFiltersService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.slotsFilters = this.slotsFiltersService.getSlotsFilters();
    this.store.dispatch(AppActions.loadProviders());
  }

  onCategorySelected(filter: SlotsFilters) {
    this.store.dispatch(AppActions.loadSlotsByCategory({ filter }));
  }

  onToggleDisplay() {
    this.providersListExtended = !this.providersListExtended;
  }

  onProviderSelected(id: string) {
    this.store.dispatch(AppActions.loadSlotsByProvider({ id }));
  }
}
