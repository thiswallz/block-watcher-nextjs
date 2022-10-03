import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ethers } from 'ethers';
import { addBlock} from '../lib/store/slices/blockChainSlice';
import { store } from '../lib/store/store';
import { createGlobalStyle } from 'styled-components';
import "../styles/globals.css"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;


const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_WS_ENDPOINT = process.env.NEXT_PUBLIC_API_WS_ENDPOINT

function MyApp({ Component, pageProps }: AppProps) {
  const provider = new ethers.providers.JsonRpcProvider(API_ENDPOINT);
  const wsProvider = new ethers.providers.WebSocketProvider(API_WS_ENDPOINT);

  wsProvider.on('block', async (blockNumber: number) => {
    const block = await provider.getBlock(blockNumber);

    if (block) {
      const { gasLimit, gasUsed, _difficulty} = block
      store.dispatch(addBlock({
        block: {
          ...block,
          gasLimit: gasLimit.toString(),
          gasUsed: gasUsed.toString(),
          _difficulty: _difficulty.toString(),
        }
      }))
    }
  });
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;