import { TOKEN_LIST } from '@/constants';
import { atom } from 'jotai';

type TokenPairAtom = {
  base: TokenInfo;
  quote: TokenInfo;
};

export const tokenPairAtom = atom<TokenPairAtom>({ base: TOKEN_LIST[0], quote: TOKEN_LIST[1] });
