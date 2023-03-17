import { ApiService } from './../slots/slots-navigation/services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as AppActions from './app.actions';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadProviders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadProviders),
      mergeMap(() =>
        this.apiService.getProviders().pipe(
          map((providers) => AppActions.loadProvidersSuccess({ providers })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.loadProvidersFailure({
                error: `Failed to get items!: Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  loadSlotsByProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadSlotsByProvider),
      mergeMap(({id}) =>
        this.apiService.getSlotsbyProvider(id).pipe(
          map((slots) => AppActions.loadSlotsByProviderSuccess({ slots })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.loadSlotsByProviderFailure({
                error: `Failed to get items!: Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  // loadSlotsBySelectedCategory$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AppActions.loadSlotsByCategory),
  //     mergeMap(({filter}) =>
  //       this.apiService.getSlotsAndCategories(filter.apiName).pipe(
  //         map((slots) => AppActions.loadSlotsByCategorySuccess({ slots })),
  //         catchError((err: HttpErrorResponse) =>
  //           of(
  //             AppActions.loadSlotsByCategoryFailure({
  //               error: `Failed to get items!: Server responded with: ${err.message}`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   );
  // });


}