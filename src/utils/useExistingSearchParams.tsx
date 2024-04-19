import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useExistingSearchParams() {
  const [searchParams] = useSearchParams();

  return useCallback(
    (exclude?: string[]) =>
      Object.fromEntries(
        [...searchParams.entries()].filter(([key /*, value */]) => {
          // if (value === '') return false;
          return !exclude?.includes(key);
        })
      ),
    [searchParams]
  );
}
