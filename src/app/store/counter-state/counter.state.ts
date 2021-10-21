export interface CounterState {
  count: number;
  counterType: string;
}

export const initialCounterState: CounterState = {
  count: 13,
  counterType: 'Baloon Counter',
};
