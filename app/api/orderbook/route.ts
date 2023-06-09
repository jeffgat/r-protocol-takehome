import { NETWORK_ENDPOINTS, TOKEN_LIST } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

// config
const headers = new Headers();
headers.append('0x-api-key', process.env.NEXT_PUBLIC_0X_API_KEY || '');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const base = TOKEN_LIST.find((token) => token.token === searchParams.get('base'));
  const quote = TOKEN_LIST.find((token) => token.token === searchParams.get('quote'));

  const url = `${NETWORK_ENDPOINTS.eth}/orderbook/v1?quoteToken=${quote?.address}&baseToken=${base?.address}`;

  try {
    const res = await fetch(url, { method: 'GET', headers });

    const data = await res.json();
    return NextResponse.json({ response: data });
  } catch (error) {
    // send error to logger
    console.error(error);
    return NextResponse.error();
  }
}
