import { State } from './reducer';

export const getCurrentTx= (state: State) => state.blockChain.transaction;
export const getBlocks = (state: State) => state.blockChain.blocks;
