"use client"

import axios from 'axios';
import Swap from './Swap';

const tokens = {
  eth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // (weth)
  usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  imx: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF'
};

export default function Home() {
  const get = async () => {
    try {
      const res = await axios.get(
        `https://api.0x.org/orderbook/v1?quoteToken=${tokens.usdc}&baseToken=${tokens.eth}`
      );
      console.log('res', res.data);
    } catch (err) {
      console.log('err', err);
    }
  };
  get();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Swap />
    </main>
  );
}
