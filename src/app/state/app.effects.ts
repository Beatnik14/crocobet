import { ApiService } from './../slots/slots-navigation/services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, mergeMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import * as AppActions from './app.actions';
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
                error: `Failed to get providers. Server responded with: ${err.message}`,
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
      switchMap(({ id }) =>
        this.apiService.getSlotsbyProvider(id).pipe(
          map((slots) => AppActions.loadSlotsByProviderSuccess({ slots })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.loadSlotsByProviderFailure({
                error: `Failed to get slots. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  loadSlotsBySelectedCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadSlotsByCategory),
      switchMap(({ filter }) =>
        this.apiService.getSlotsAndCategories(filter.apiName).pipe(
          map((slots) =>
            AppActions.loadSlotsByCategorySuccess({ slots: slots.games })
          ),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.loadSlotsByCategoryFailure({
                error: `Failed to get slots. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });
}
