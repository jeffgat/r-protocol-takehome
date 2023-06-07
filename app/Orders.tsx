import React, { useEffect } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { ordersAtom } from '@/atoms/orders';

type Props = {};

const Orders = (props: Props) => {
  const [orders] = useAtom(ordersAtom);
  console.log('orders', orders);

  // useEffect(() => {

  //   if (orders) {
  //     orders.asks.records.map(() => {
        
  //     })
  //   }
  // }, [orders])
  

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] min-w-[360px]">
      <div className="bg-neutral-900 shadow sm:rounded-lg">
        <div className="px-6 py-4 border-b-2 border-neutral-800 relative flex space-x-2">
          <Image className="" src="/images/tokens/eth.webp" width={16} height={16} alt="" />
          <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
