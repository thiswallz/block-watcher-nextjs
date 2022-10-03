import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BlockInfo = {
  difficulty: number;
  gasLimit: string;
  gasUsed: string;
  number: number;
  timestamp: number;
  transactions: string[];
  _difficulty: string;
}

export type TxInfo = {
  blockHash: string;
  blockNumber: string;
  from: string;
  to: string;
  transactionIndex: string;
  value: string;
  gas: string;
  gasPrice: string;
}

export type BlockChainState = {
  blocks : BlockInfo[];
  transaction?: TxInfo;
};

interface AddPayload {
  block: BlockInfo;
}

interface SetTxPayload {
  transaction: TxInfo;
}

const MAX_BLOCKS = 5

export const initialState: BlockChainState = {
  blocks: [],
  transaction: undefined 
};

const blockChainSlice = createSlice({
  name: 'blockChain',
  initialState,
  reducers: {
    addBlock(state: BlockChainState, action: PayloadAction<AddPayload>) {
      const { block } = action.payload;
      state.blocks = [ ...state.blocks.slice(-(MAX_BLOCKS - 1)), block]
    },
    setTransaction(state: BlockChainState, action: PayloadAction<SetTxPayload>) {
      const { transaction } = action.payload;
      state.transaction = transaction
    },
  }
});

export const { addBlock, setTransaction } = blockChainSlice.actions;

export default blockChainSlice.reducer;
