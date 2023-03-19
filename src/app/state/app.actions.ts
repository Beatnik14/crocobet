import { SlotsFilters } from './../slots/models/slots-filters.model';
import { Slot } from './../slots/models/slot.model';
import { Provider } from './../slots/models/provider.model';
import { createAction, props } from '@ngrx/store';

//Load Slot By Category
export const loadSlotsByCategory = createAction(
  '[App] Load Slots By Categroy',
  props<{ filter: SlotsFilters }>()
);

export const loadSlotsByCategorySuccess = createAction(
  '[App] Load Slots By Provider Success',
  props<{ slots: Slot[] }>()
);

export const loadSlotsByCategoryFailure = createAction(
  '[App] Load Slots By Provider Failure',
  props<{ error: string }>()
);


//Load Providers
export const loadProviders = createAction(
  '[App] Load Providers',
);

export const loadProvidersSuccess = createAction(
  '[App] Load Providers Success',
  props<{ providers: Provider[] }>()
);

export const loadProvidersFailure = createAction(
  '[App] Load Providers Failure',
  props<{ error: string }>()
);

//Load Slots By Providers
export const loadSlotsByProvider = createAction(
  '[App] Load Slots By Provider',
  props<{ id: string }>()
);

export const loadSlotsByProviderSuccess = createAction(
  '[App] Load Slots By Provider Success',
  props<{ slots: Slot[] }>()
);

export const loadSlotsByProviderFailure = createAction(
  '[App] Load Slots By Provider Failure',
  props<{ error: string }>()
);
