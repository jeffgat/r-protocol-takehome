"use client"

import { Provider } from 'jotai';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return <Provider>{children}</Provider>;
}
