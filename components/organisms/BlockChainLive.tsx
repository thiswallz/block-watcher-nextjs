import { connect, ConnectedProps } from 'react-redux';
import { getBlocks } from '../../lib/store/selectors';
import { BlockChainTxs } from '../molecules/BlockChainTxs';
import { State } from '../../lib/store/reducer';
import { Component } from 'react';

const mapState = (state: State) => ({
  blocks: getBlocks(state),
});

const connector = connect(
  mapState,
);

type HeaderProps = ConnectedProps<typeof connector>;


class BlockChainLive extends Component<HeaderProps> {
  render() {
    const { blocks } = this.props
    return (
      <div>
        <div className="
          absolute 
          bg-gradient-to-r bg-clip-text text-transparent 
          from-lime-500 via-lime-400 to-gray-900
          select-none animate-text
          max-h-screen 
          break-all 
          overflow-hidden">
          { blocks.map(block => block.transactions.map(tx => tx).reverse()) }
        </div>
        <div className="grid h-screen place-items-center">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <BlockChainTxs blocks={blocks} />
          </div>
        </div>
      </div>

    )
  }
}

export default connector(BlockChainLive);
