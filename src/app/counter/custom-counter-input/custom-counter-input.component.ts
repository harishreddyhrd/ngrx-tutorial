import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addCustomCountAction,
  changeCounterTypeAction,
} from '../../store/counter-state/counter.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  inputCustomCount: number;
  constructor(private _store: Store<AppState>) {}

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
