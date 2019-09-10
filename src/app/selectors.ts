import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { State } from './state';

const countState = (state: State): number => (state ? state.count : 0);

export const selectFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('counterSelector');

export const count = createSelector(
  selectFeatureState,
  countState
);
