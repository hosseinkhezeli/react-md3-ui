import { KeyboardEvent, useEffect, useRef } from 'react';
import { UseButtonGroupA11yOptions } from '../../types/components/button-groups.types';

export function useButtonGroupA11y({
  count,
  type,
  selectedIndices,
  onSelect,
  ariaLabel,
  ariaLabelledBy,
}: UseButtonGroupA11yOptions) {
  const refs = useRef<Array<HTMLButtonElement | null>>(Array(count).fill(null));
  const isExclusive = type === 'connected';
  const role = isExclusive ? 'radiogroup' : 'group';
  const itemRole = isExclusive ? 'radio' : 'button';

  // Initialize tabIndex: only first selected or first item is tabbable
  useEffect(() => {
    let firstIndex = 0;
    if (isExclusive && selectedIndices.length) firstIndex = selectedIndices[0];
    refs.current.forEach((btn, idx) => {
      btn?.setAttribute('tabIndex', idx === firstIndex ? '0' : '-1');
    });
  }, [count, selectedIndices, isExclusive]);

  const handleKeyDown =
    (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
      const dir = document.dir === 'rtl' ? -1 : 1;
      let next: number | null = null;
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          next = (index - dir + count) % count;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          next = (index + dir + count) % count;
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = count - 1;
          break;
        case ' ':
        case 'Enter':
          onSelect?.(
            isExclusive
              ? [index]
              : selectedIndices.includes(index)
              ? selectedIndices.filter((i) => i !== index)
              : [...selectedIndices, index]
          );
          e.preventDefault();
          return;
        default:
          return;
      }
      e.preventDefault();
      refs.current[next]?.focus();
      if (isExclusive) onSelect?.([next]);
    };

  const getGroupProps = () => ({
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  });
  console.log(refs);

  const getItemProps = (index: number) => ({
    ref: (el: HTMLButtonElement) => {
      refs.current[index] = el;
    },
    role: itemRole,
    'aria-checked': isExclusive ? selectedIndices[0] === index : undefined,
    'aria-pressed': !isExclusive ? selectedIndices.includes(index) : undefined,
    onKeyDown: handleKeyDown(index),
    'data-state': selectedIndices.includes(index) ? 'selected' : 'unselected',
    onClick: () =>
      onSelect?.(
        isExclusive
          ? [index]
          : selectedIndices.includes(index)
          ? selectedIndices.filter((i) => i !== index)
          : [...selectedIndices, index]
      ),
  });

  return { getGroupProps, getItemProps };
}
