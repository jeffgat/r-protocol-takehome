import { formatErc20 } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

interface OrderRowProps {
  taker: TokenInfo;
  maker: TokenInfo;
  order: Order;
}

const OrderRow = ({ maker, taker, order }: OrderRowProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center my-2 space-x-1">
        <Image src={taker.icon} width={12} height={12} alt="" />
        <p className="text-xs text-neutral-100">{formatErc20(order.takerAmount, taker.decimals)}</p>
      </div>
      <div className="flex items-center my-2 space-x-1">
        <Image src={maker.icon} width={12} height={12} alt="" />
        <p className="text-xs text-neutral-100">{formatErc20(order.makerAmount, maker.decimals)}</p>
      </div>
    </div>
  );
};
export default OrderRow;
