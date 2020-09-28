import { Action } from '@ngrx/store';
import { Filter } from '@redux/filter/filter.model';
export const SET_FILTER = '[Filter] set';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(
    public newFilter: Filter
  ) {}
}

export type AllActions = SetFilterAction;
