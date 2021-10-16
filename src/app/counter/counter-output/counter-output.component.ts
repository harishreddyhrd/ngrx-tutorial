import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  getCount!: number;
  constructor(private store: Store<{ count: { count: number } }>) {}

  ngOnInit(): void {
    this.store.select('count').subscribe((data) => {
      this.getCount = data.count;
    });
  }
}
