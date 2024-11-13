import { container } from 'tsyringe';
import { useMemo } from 'react';

export function useInjection<T>(token: new (...args: any[]) => T): T {
  return useMemo(() => container.resolve(token), [token]);
}
