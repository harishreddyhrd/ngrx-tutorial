export interface CounterState {
  count: number;
  counterType: string;
}

export const initialState: CounterState = {
  count: 13,
  counterType: 'Baloon Counter',
};
