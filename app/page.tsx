'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { latestOrdersAtom, bidsAtom, asksAtom } from '@/atoms/orders';
import TokenPairs from './TokenPairs';
import OrderBook from './OrderBook';
import { tokenPairAtom } from '@/atoms/tokenPair';
import LatestOrders from './LatestOrders';
import WidgetWrapper from '@/components/ui/widget-wrapper';
import useWebSocket from 'react-use-websocket';
import { v4 as uuidv4 } from 'uuid';
import { TOKEN_LIST } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [_bids, setBids] = useAtom(bidsAtom);
  const [_asks, setAsks] = useAtom(asksAtom);
  const [fetchError, setFetchError] = useState('');
  const [latestOrders, setLatestOrders] = useAtom(latestOrdersAtom);
  const [tokenPair] = useAtom(tokenPairAtom);

  // websocket connection
  const { sendJsonMessage } = useWebSocket('wss://api.0x.org/orderbook/v1', {
    onOpen: () => {
      console.log('ws connection opened');
      // subscribe to orders
      sendJsonMessage({
        type: 'subscribe',
        channel: 'orders',
        requestId: uuidv4()
      });
    },
    onClose: () => console.log('ws connection closed'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap['message']) => {
      // need to filter this way because passing filters through to websocket via request does not seem to work
      // add order to latest orders if it's in TOKEN_LIST
      if (
        TOKEN_LIST.find((t) => t.address === JSON.parse(event.data).payload[0].order.takerToken) &&
        TOKEN_LIST.find((t) => t.address === JSON.parse(event.data).payload[0].order.makerToken)
      ) {
        setLatestOrders((prev) => [...prev, JSON.parse(event.data).payload[0].order]);
      }
    }
  });

  useEffect(() => {
    // refetch orderbook data when tokenPair changes or new order is added via websocket
    const getOrderbook = async () => {
      // get orders via orderbook api
      try {
        // needs to be dbounced
        // debounce to avoid rate limit, also just good practice

        const orderbook = await axios.get('/api/orderbook', {
          params: {
            base: tokenPair.base.token,
            quote: tokenPair.quote.token
          }
        });
        // get orders saved to state via websocket
        const matchedLatestOrders = latestOrders.filter((o) => {
          return (
            o.makerToken === tokenPair.base.address && o.takerToken === tokenPair.quote.address
          );
        });

        const asks = orderbook.data.response.asks.records.map((record: any) => {
          return record.order;
        });
        const bids = orderbook.data.response.bids.records.map((record: any) => {
          return record.order;
        });

        const mergedOrders: Order[] = [...matchedLatestOrders, ...asks];
        mergedOrders.sort((a, b) => {
          return parseFloat(a.takerAmount) - parseFloat(b.takerAmount);
        });

        // separate the two because bids don't come through on the websocket
        setAsks(mergedOrders);
        setBids(bids);
      } catch (_) {
        // handle error
        setFetchError(
          'Could not fetch orders from 0x labs. Please refresh the page or try again later'
        );
        // reset error state
        setTimeout(() => {
          setFetchError('');
        }, 3000);
      }
    };

    // debounce to avoid rate limit
    let debounceTimer: NodeJS.Timeout;
    function debounce() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        getOrderbook();
        // rate limit is 500ms
      }, 550);
    }
    debounce();
  }, [setBids, setAsks, tokenPair, latestOrders]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 overflow-x-hidden">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-neutral-50">
            Get token order book data
          </h2>
          <p className="opacity-60">See price data between two tokens in real-time</p>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:space-x-4 lg:items-start">
          <WidgetWrapper>
            <TokenPairs />
          </WidgetWrapper>

          <WidgetWrapper>
            <OrderBook />
          </WidgetWrapper>

          <WidgetWrapper>
            <LatestOrders />
          </WidgetWrapper>
        </div>
        <AnimatePresence>
          {fetchError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-md text-red-400"
            >
              {fetchError}
            </motion.p>
          )}
        </AnimatePresence>
        <p className="mt-10 text-center text-sm opacity-60">
          Risk Protocol assignment by Jeffrey Gatbonton
        </p>
      </div>
    </main>
  );
}
