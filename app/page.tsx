'use client';

import axios from 'axios';
import Swap from './Swap';
import Orders from './Orders';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { ordersAtom } from '@/atoms/orders';

const tokens = {
  eth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // (weth)
  usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  imx: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF'
};

export default function Home() {
  const [_, setOrders] = useAtom(ordersAtom);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `https://api.0x.org/orderbook/v1?quoteToken=${tokens.usdc}&baseToken=${tokens.eth}`
        );
        setOrders(res.data);
      } catch (err) {
        console.log('err', err);
      }
    };

    getOrders();
  }, [setOrders]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-neutral-50">
            Get token orderbook data
          </h2>
          <p className="opacity-60">See price data between two tokens in real-time</p>
        </div>
        <div className="flex space-x-4">
          <Swap />
          <Orders />
        </div>
      </div>
      {/* <p className="mt-10 text-center text-sm opacity-60">
        Risk Protocol assignment by Jeffrey Gatbonton
      </p> */}
    </main>
  );
}
