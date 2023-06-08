type Order = {
  chainId: number;
  expiry: string;
  feeRecipient: string;
  maker: string;
  makerAmount: string;
  makerToken: string;
  pool: string;
  salt: string;
  sender: string;
  signature: {
    signatureType: number;
    r: string;
    s: string;
    v: number;
  };
  taker: string;
  takerAmount: string;
  takerToken: string;
  takerTokenFeeAmount: string;
  verifyingContract: string;
};

type OrderRecord = {
  metaData: {
    createdAt: string;
    orderHash: string;
    remainingFillableTakerAmount: string;
  };
  order: Order;
};

type OrderPaginated = {
  page: number;
  perPage: number;
  records: OrderRecord[];
  total: number;
};

type OrderbookResponse = {
  asks: OrderPaginated;
  bids: OrderPaginated;
};

type TokenInfo = {
  token: string;
  address: string;
  icon: string;
  decimals: number;
};
type TokenPair = {
  base: string;
  quote: string;
};
