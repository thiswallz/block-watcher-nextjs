import { BlockInfo } from '../../lib/store/slices/blockChainSlice';
import Block from '../atoms/Block';

type BlockChainTxsProps = {
  blocks: BlockInfo[];
};

export function BlockChainTxs({ blocks }: BlockChainTxsProps) {
  return (<>
    {
      blocks.map((block, index) => 
      <Block isSpecial={blocks.length === index + 1} block={block} key={block.number.toString()} />)
    }
  </>
  );
}
