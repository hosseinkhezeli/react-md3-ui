import { useEffect, RefObject } from 'react';

/**
 * Runs `handler` when a click occurs outside the given `ref` element.
 */
export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T|null> ,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      // Do nothing if clicking inside the element or if not mounted
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
