import { ScrollArea } from '@/components/ui/scroll-area';
import { TOKEN_LIST } from '@/constants';
import React from 'react';
import OrderRow from './OrderRow';
import { cn } from '@/lib/utils';

type Props = {
  heading: string;
  orders: Order[] | null;
  height?: string;
};

const OrderList = ({ orders, heading, height = "h-72" }: Props) => {
  return (
    <>
      <div className="px-6 py-4 border-b-2 border-neutral-800 relative flex space-x-2">
        <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">{heading}</p>
      </div>
      <div className="flex justify-between p-6 pb-0">
        <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider pb-2">
          Taker
        </p>
        <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider pb-2">
          Maker
        </p>
      </div>

      <ScrollArea className={cn('w-full rounded-md p-6 pt-0', height)}>
        {orders && orders.length > 0 ? (
          orders.map((o, i) => {
            return (
              <OrderRow
                order={o}
                taker={TOKEN_LIST.find((t) => t.address === o.takerToken)!}
                maker={TOKEN_LIST.find((t) => t.address === o.makerToken)!}
                key={i}
              />
            );
          })
        ) : (
          <>
            <p className="font-semibold text-sm text-neutral-100 tracking-wide">
              No new orders have been placed with these asset pairs yet.
            </p>
          </>
        )}
      </ScrollArea>
    </>
  );
};

export default OrderList;
