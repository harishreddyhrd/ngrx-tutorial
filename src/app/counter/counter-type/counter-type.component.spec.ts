import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTypeComponent } from './counter-type.component';

describe('CounterTypeComponent', () => {
  let component: CounterTypeComponent;
  let fixture: ComponentFixture<CounterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
