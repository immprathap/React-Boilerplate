import { fromJS } from 'immutable';
import explorerReducer from '../reducer';

describe('explorerReducer', () => {
  it('returns the initial state', () => {
    expect(explorerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
