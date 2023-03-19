import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Component, OnInit } from '@angular/core';
import * as AppSelectors from '../../state/app.selectors';

@Component({
  selector: 'app-slots-list',
  templateUrl: './slots-list.component.html',
  styleUrls: ['./slots-list.component.scss'],
})
export class SlotsListComponent implements OnInit {
  slots$ = this.store.select(AppSelectors.getSlots);

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {}
}
