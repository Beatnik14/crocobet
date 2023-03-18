import { ProviderSlots } from './../../models/provider-slots.model';
import { Slot } from './../../models/slot.model';
import { Provider } from './../../models/provider.model';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.baseUrl;

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl, {
      params: {
        type: 'slot',
        platform: 'desktop',
      },
    });
  }

  getSlotsbyProvider(providerId: string): Observable<Slot[]> {
    return this.http
      .get<{ data: ProviderSlots }>(
        `${this.apiUrl}/v2/slot/providers/${providerId}`,
        {
          params: {
            platform: 'desktop',
          },
        }
      )
      .pipe(map((response) => response.data.games));
  }

  getSlotsAndCategories(filter: string) {
    return this.http
      .get<{ data: any[] }>(`${this.apiUrl}/v2/slot/categories`, {
        params: {
          include: 'games',
        },
      })
      .pipe(
        map((response) =>
          response.data.find((category) => category.name === filter)
        )
      );
  }
}
