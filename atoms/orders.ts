import { atom } from 'jotai';

// state
export const bidsAtom = atom<Order[] | null>(null);
export const asksAtom = atom<Order[] | null>(null);
export const latestOrdersAtom = atom<Order[]>([]);
