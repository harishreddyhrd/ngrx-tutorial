import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomCountAction } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  inputCustomCount: number;
  constructor(private store: Store<{ customCount: CounterState }>) {}

  ngOnInit(): void {}

  addCustomCount() {
    this.store.dispatch(
      addCustomCountAction({ customCount: this.inputCustomCount })
    );
  }
}
