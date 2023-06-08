'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { ordersAtom } from '@/atoms/orders';
import OrderList from './OrderList';

const OrderBook = () => {
  const [orders] = useAtom(ordersAtom);

  return <OrderList orders={orders} heading="Order Book" />;
};

export default OrderBook;
