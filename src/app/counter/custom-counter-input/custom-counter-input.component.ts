import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addCustomCountAction,
  changeCounterTypeAction,
} from '../../store/counter-state/counter.actions';
import { CounterState } from '../../store/counter-state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  inputCustomCount: number;
  constructor(private _store: Store<{ customCount: CounterState }>) {}

  ngOnInit(): void {}

  addCustomCount() {
    this._store.dispatch(
      addCustomCountAction({ customCount: this.inputCustomCount })
    );
  }

  changeCounterType() {
    this._store.dispatch(changeCounterTypeAction());
  }
}
