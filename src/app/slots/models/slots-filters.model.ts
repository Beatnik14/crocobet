import { categories } from './categories.model';
export interface SlotsFilters {
  iconPath: string;
  title: categories;
  quantity: number;
  disabled: boolean;
  apiName: string;
}
