import { BlockInfo } from "../../lib/store/slices/blockChainSlice";

type BlockProps = {
  block: BlockInfo;
  isSpecial?: boolean;
};

const Block = ({ block, isSpecial }: BlockProps) =>
  <div className={`
  relative
  bg-gray-900
  h-48 
  w-48 
  border-4 
  border-rose-500 
  flex items-center	justify-center
  hover:bg-rose-700
  ${isSpecial && 'border-stone-500 border-dotted h-60 w-60'}`
  }>
    <div>{block.number}</div>
    <div className="absolute left-1 bottom-1 text-lime-400">{block.transactions.length}</div>
    {isSpecial && <span className="flex h-3 w-3 absolute right-1 top-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
    </span>}
  </div>;

export default Block;