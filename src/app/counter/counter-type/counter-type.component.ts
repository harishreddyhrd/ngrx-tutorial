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
  // getCounterType: string;
  getCounterType$: Observable<string>;
  constructor(private _store: Store<{ count: CounterState }>) {}

  ngOnInit(): void {
    /* this._store.select('count').subscribe((incomingData) => {
      console.log('COUNT_TYPE::called');
      this.getCounterType = incomingData.counterType;
    }); */
    /* this._store.select(counterTypeSelector).subscribe((incomingData) => {
      console.log('COUNT_TYPE::called');
      this.getCounterType = incomingData;
    }); */
    this.getCounterType$ = this._store.select(counterTypeSelector);
  }
}
