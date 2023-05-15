import { CHANGE_LANGUAGES } from './actions';

const initialState = {
  Languages: 'EN'
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGES:
      return {
        ...state,
        Languages: payload
      };

    default:
      return state;
  }
};

export default rootReducer;
