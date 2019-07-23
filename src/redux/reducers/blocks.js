import { LOAD_BLOCKS_SUCCESS } from 'redux/actions';

const initialState = {
  blocks: [],
};

export const blocks = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.data,
      };
    default:
      return state;
  }
};