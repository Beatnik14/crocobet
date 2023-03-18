import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { Component } from '@angular/core';

import * as AppSelectors from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crocobet';

  error$ = this.store.select(AppSelectors.getError);
  loading$ = this.store.select(AppSelectors.getLoading);

  constructor(private store: Store<AppState>) {}
}
