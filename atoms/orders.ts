import { atom } from 'jotai';

// state
export const ordersAtom = atom<Order[] | null>(null);
export const latestOrdersAtom = atom<Order[]>([]);
