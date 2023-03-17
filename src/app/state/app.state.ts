import { Slot } from './../slots/models/slot.model';
import { Provider } from './../slots/models/provider.model';
import { categories } from '../slots/models/categories.model';

export interface AppState {
  selectedCategory: categories;
  selectedProvider: string;
  providers: Provider[];
  slots: Slot[];
  error: string;
  loading: boolean;
}

export const initialAppState: AppState = {
  selectedCategory: 'Top Slots',
  selectedProvider: '',
  providers: [],
  slots: [],
  error: null,
  loading: false,
};
