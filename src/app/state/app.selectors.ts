import { AppState } from './app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getAppStateSelector = createFeatureSelector<AppState>('app');

export const getSelectedCategory = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.selectedCategory;
  }
);

export const getSelectedProvider = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.selectedProvider;
  }
);

export const getProviders = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.providers;
  }
);

export const getSlots = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.slots;
  }
);

export const getError = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.error;
  }
);

export const getLoading = createSelector(
  getAppStateSelector,
  (state: AppState) => {
    return state.loading;
  }
);
