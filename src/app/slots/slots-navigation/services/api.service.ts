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
    return this.http.get<Slot[]>(
      `${this.apiUrl}/v2/slot/providers/${providerId}`,
      {
        params: {
          platform: 'desktop',
        },
      }
    )
  }

  // getSlotsAndCategories(filter: string): Observable<Slot[]> {
  //   return this.http
  //     .get<Slot[]>(`${this.apiUrl}/v2/slot/categories`, {
  //       params: {
  //         include: 'games',
  //       },
  //     })
  //     .pipe(
  //       map((data: any[]) => {
  //         console.log(data);
  //         return data.filter((category) => {
  //           console.log("Category", category.name)
  //           return category.name === filter;
  //         });
  //       })
  //     );
  // }
}
