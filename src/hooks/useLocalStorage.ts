import { useCallback, useState } from 'react';

type LocalStorage<T> = [T, (value: T | React.Dispatch<T>) => void];

export function useLocalStorage<T>(
  key: string,
  initialValue: T | null = null
): LocalStorage<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('[useLocalStorage]', error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore = typeof value === 'function' ? (value as Function)(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error('[useLocalStorage - setValue]', error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue as React.Dispatch<any>];
}
