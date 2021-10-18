import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-type',
  templateUrl: './counter-type.component.html',
  styleUrls: ['./counter-type.component.scss'],
})
export class CounterTypeComponent implements OnInit {
  getCounterType: string;
  constructor(private _store: Store<{ count: CounterState }>) {}

  ngOnInit(): void {
    this._store.select('count').subscribe((incomingData) => {
      console.log('COUNT_TYPE::called');
      this.getCounterType = incomingData.counterType;
    });
  }
}
