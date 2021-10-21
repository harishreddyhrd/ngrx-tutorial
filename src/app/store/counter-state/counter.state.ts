export interface CounterState {
  count: number;
  counterType: string;
}

export const initialState = {
  count: 13,
  counterType: 'Baloon Counter',
};
