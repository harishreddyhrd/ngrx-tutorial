import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  getCount: number;
  constructor(private _counterService: CounterService) {}

  ngOnInit(): void {
    this._counterService.count$.subscribe((value) => {
      this.getCount = value;
    });
  }
}
