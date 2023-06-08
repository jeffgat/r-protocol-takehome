export const TOKEN_LIST: TokenInfo[] = [
  {
    token: 'ETH',
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase(),
    icon: '/images/tokens/eth.webp',
    decimals: 18
  },
  {
    token: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'.toLowerCase(),
    icon: '/images/tokens/usdc.webp',
    decimals: 6
  },
  {
    token: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7'.toLowerCase(),
    icon: '/images/tokens/usdt.webp',
    decimals: 6
  },
  {
    token: 'IMX',
    address: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF'.toLowerCase(),
    icon: '/images/tokens/imx.webp',
    decimals: 18
  },
  {
    token: 'PEPE',
    address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'.toLowerCase(),
    icon: '/images/tokens/pepe.webp',
    decimals: 18
  }
];

export const NETWORK_ENDPOINTS = {
  eth: 'https://api.0x.org',
  matic: 'https://polygon.api.0x.org',
  bsc: 'https://bsc.api.0x.org'
};
