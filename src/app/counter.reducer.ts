import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { initialState, State } from './state';

const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
  on(reset, state => ({ ...state, count: 0 }))
);

export function counterReducer(state = initialState, action: Action): State {
  return _counterReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
