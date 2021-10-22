import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../../store/counter-state/counter.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}

  increaseCountByOne() {
    this._store.dispatch(incrementAction());
  }
  decreaseCountByOne() {
    this._store.dispatch(decrementAction());
  }
  resetCountToZero() {
    this._store.dispatch(resetAction());
  }
}
