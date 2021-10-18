import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterTypeSelector } from '../store/counter.selectors';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-type',
  templateUrl: './counter-type.component.html',
  styleUrls: ['./counter-type.component.scss'],
})
export class CounterTypeComponent implements OnInit {
  getCounterType$: Observable<string>;
  constructor(private _store: Store<{ count: CounterState }>) {}

  ngOnInit(): void {
    this.getCounterType$ = this._store.select(counterTypeSelector);
  }
}
