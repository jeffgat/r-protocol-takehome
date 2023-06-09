import { latestOrdersAtom } from '@/atoms/orders';
import { useAtom } from 'jotai';
import React from 'react';
import OrderList from './OrderList';

const LatestOrders = () => {
  const [latestOrders] = useAtom(latestOrdersAtom);

  return <OrderList orders={latestOrders} heading="Latest Orders" />;
};

export default LatestOrders;
