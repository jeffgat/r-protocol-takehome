'use client';

import { tokenPairAtom } from '@/atoms/tokenPair';
import DownArrow from '@/components/svg/down-arrow';
import { Button } from '@/components/ui/button';
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
}
const TokenSelect = ({ type, value }: TokenSelectProps) => {
  const [tokenPair, setTokenPair] = useAtom(tokenPairAtom);

  const handleChange = (e: string) => {
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
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {TOKEN_LIST.map((t) => (
            <SelectItem key={t.token} value={t.token}>
              <TokenTag image={t.icon} name={t.token} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const TokenPairs = () => {
  const [tokenPair, setTokenPair] = useAtom(tokenPairAtom);

  const handleSwap = () => {
    setTokenPair((prev) => ({ ...prev, base: prev.quote, quote: prev.base }));
  };

  return (
    <>
      <div className="px-6 py-4 border-b-2 border-neutral-800 relative flex space-x-2">
        <Image className="" src="/images/tokens/eth.webp" width={16} height={16} alt="" />
        <p className="font-semibold text-xs text-neutral-100 uppercase tracking-wider">
          Etherum Mainnet
        </p>
      </div>

      <TokenSelect type="base" value={tokenPair.base.token} />

      <div className="border-t-2 border-neutral-800 relative mb-4 mt-6">
        <div
          onClick={handleSwap}
          className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-900 border-2 border-neutral-800 rounded-full cursor-pointer hover:border-neutral-400 active:border-neutral-600 transition"
        >
          <DownArrow color="#8C919A" />
        </div>
      </div>

      <TokenSelect type="quote" value={tokenPair.quote.token} />
    </>
  );
};

export default TokenPairs;
