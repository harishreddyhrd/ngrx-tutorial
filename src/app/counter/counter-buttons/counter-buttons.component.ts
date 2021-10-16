import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ count: { count: number } }>) {}

  ngOnInit(): void {}

  increaseCountByOne() {
    this.store.dispatch(incrementAction());
  }
  decreaseCountByOne() {
    this.store.dispatch(decrementAction());
  }
  resetCountToZero() {
    this.store.dispatch(resetAction());
  }
}
