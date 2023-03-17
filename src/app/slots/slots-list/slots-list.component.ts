import { ApiService } from './../slots-navigation/services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import * as AppActions from '../../state/app.actions';
import * as AppSelectors from '../../state/app.selectors';

@Component({
  selector: 'app-slots-list',
  templateUrl: './slots-list.component.html',
  styleUrls: ['./slots-list.component.scss'],
})
export class SlotsListComponent implements OnInit {

  slots$ = this.store.select(AppSelectors.getSlots)

  constructor(private store: Store<AppState>, private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getSlotsbyProvider('egt').subscribe(console.log)
  }
}
