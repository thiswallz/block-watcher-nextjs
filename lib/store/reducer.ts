import { combineReducers } from 'redux';

import blockChainReducer from './slices/blockChainSlice';

const rootReducer = combineReducers({
  blockChain: blockChainReducer
});

export type State = ReturnType<typeof rootReducer>

export default rootReducer;
