import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  @Output() onIncrement = new EventEmitter<void>();
  @Output() onDecrement = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  increaseCountByOne() {
    this.onIncrement.emit();
  }
  decreaseCountByOne() {
    this.onDecrement.emit();
  }
  resetCountToZero() {
    this.onReset.emit();
  }
}
