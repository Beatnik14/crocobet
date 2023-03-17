import { AppState, initialAppState } from './app.state';
import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export const appReducer = createReducer(
  initialAppState,

  //Slots By Category
  on(AppActions.loadSlotsByCategory, (state: AppState, data) => {
    return {
      ...state,
      selectedCategory: data.filter.title,
      selectedProvider: null,
      loading: true
    };
  }),

  on(AppActions.loadSlotsByCategorySuccess, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      slots: data.slots,
    };
  }),
  on(AppActions.loadSlotsByCategoryFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  }),

  //Providers
  on(AppActions.loadProviders, (state: AppState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(AppActions.loadProvidersSuccess, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      providers: data.providers,
    };
  }),
  on(AppActions.loadProvidersFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  }),

  //Slots By Provider
  on(AppActions.loadSlotsByProvider, (state: AppState, data) => {
    return {
      ...state,
      loading: true,
      selectedProvider: data.id,
      selectedCategory: null,
    };
  }),
  on(AppActions.loadSlotsByProviderSuccess, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      slots: data.slots,
    };
  }),
  on(AppActions.loadSlotsByProviderFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  })
);
