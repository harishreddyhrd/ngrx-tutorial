import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  incrementCount() {
    this.count++;
  }
  decrementCount() {
    this.count--;
  }
  resetCount() {
    this.count = 0;
  }
}
