import { AllActions, SET_FILTER } from './filter.actions';
import { Filter } from './filter.model';

const initState = {
  filter: 'SHOW_ALL'
};

export function filterReducer(oldState: Filter = initState, action: AllActions): Filter {
  switch (action.type) {
    case SET_FILTER: {
      return action.newFilter;
    }
    default: {
      return oldState;
    }
  }
}
