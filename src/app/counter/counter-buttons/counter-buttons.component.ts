import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private _counterService: CounterService) {}

  ngOnInit(): void {}

  increaseCountByOne() {
    this._counterService.count$.next(this._counterService.count$.value + 1);
  }
  decreaseCountByOne() {
    this._counterService.count$.next(this._counterService.count$.value - 1);
  }
  resetCountToZero() {
    this._counterService.count$.next(0);
  }
}
