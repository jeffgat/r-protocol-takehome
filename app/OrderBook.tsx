'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { asksAtom, bidsAtom } from '@/atoms/orders';
import OrderList from './OrderList';

const OrderBook = () => {
  const [bids] = useAtom(bidsAtom);
  const [asks] = useAtom(asksAtom);

  return (
    <div>
      <OrderList orders={asks} heading="Asks" height="h-48"/>
      <OrderList orders={bids} heading="Bids" height="h-48"/>
    </div>
  );
};

export default OrderBook;
