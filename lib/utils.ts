import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatErc20(input: string | number, decimal: number) {
  if (typeof input === 'string') {
    // arbitrarily set to 4 decimal places just to clean up the number displaying in the ui
    return Number.parseFloat((parseFloat(input) / 10 ** decimal).toFixed(4));
  } else {
    return Number.parseFloat((input / 10 ** decimal).toFixed(4));
  }
}
