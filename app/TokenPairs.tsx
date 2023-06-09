'use client';

import { tokenPairAtom } from '@/atoms/tokenPair';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { TokenTag } from '@/components/ui/token-tag';
import { TOKEN_LIST } from '@/constants';
import { useAtom } from 'jotai';
import Image from 'next/image';

interface TokenSelectProps {
  type: string;
  value: string;
  locked?: boolean;
}
const TokenSelect = ({ type, value, locked }: TokenSelectProps) => {
  const [tokenPair, setTokenPair] = useAtom(tokenPairAtom);

  const handleChange = (e: string) => {
    // cannot select the same token for both base and quote
    if (e === tokenPair.base.token || e === tokenPair.quote.token) {
      return;
    }
    const tok = TOKEN_LIST.find((token) => token.token === e);

    if (type === 'base') {
      setTokenPair((prev) => ({ ...prev, base: tok! }));
    } else {
      setTokenPair((prev) => ({ ...prev, quote: tok! }));
    }
  };

  return (
    <div className="p-6 space-y-2">
      <p className="font-semibold text-xs text-neutral-400 uppercase tracking-wider">{type}</p>
      <Select value={value} onValueChange={handleChange} disabled={locked}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {TOKEN_LIST.map((t, idx) => {
            if (!locked && idx >= 1) {
              return (
                <SelectItem key={t.token} value={t.token}>
                  <TokenTag image={t.icon} name={t.token} />
                </SelectItem>
              );
            } else if (locked && idx === 0) {
              return (
                <SelectItem key={t.token} value={t.token}>
                  <TokenTag image={t.icon} name={t.token} />
                </SelectItem>
              );
            }
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

const TokenPairs = () => {
  const [tokenPair] = useAtom(tokenPairAtom);

  return (
    <>
      <div className="px-6 py-4 border-b-2 border-neutral-800 relative flex space-x-2">
        <Image className="" src="/images/tokens/eth.webp" width={16} height={16} alt="" />
        <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">
          Etherum Mainnet
        </p>
      </div>

      <TokenSelect type="base token (locked)" value={tokenPair.base.token} locked />

      <div className="border-t-2 border-neutral-800 relative mb-4 mt-6"></div>

      <TokenSelect type="quote token" value={tokenPair.quote.token} />
    </>
  );
};

export default TokenPairs;
