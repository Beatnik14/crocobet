import { Slot } from './slot.model';
export interface ProviderSlots {
  type: string;
provider: string;
vendor: string;
iframeW: number;
iframeH: number;
name: string;
order: number;
tags: string[];
games: Slot[];
totalGames: number;
}
