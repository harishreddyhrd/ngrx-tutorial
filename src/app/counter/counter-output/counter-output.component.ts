import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countSelector } from '../store/counter.selectors';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  getCount$: Observable<number>;
  constructor(private _store: Store<{ count: CounterState }>) {}

  ngOnInit(): void {
    this.getCount$ = this._store.select(countSelector);
  }
}
