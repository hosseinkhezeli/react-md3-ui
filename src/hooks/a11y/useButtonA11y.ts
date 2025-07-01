import { useId } from 'react';
import {
  UseButtonA11yProps,
  UseButtonA11yReturn,
} from '../../types/components/button.types';

export function useButtonA11y({
  children,
  loading,
  disabled,
  ariaLabel,
  onKeyDown,
}: UseButtonA11yProps): UseButtonA11yReturn {
  const loadingId = useId();

  const isIconOnly =
    (typeof children === 'string' && children.trim() === '') ||
    children === undefined ||
    children === null;

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if ((disabled || loading) && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
    }
    if (onKeyDown) onKeyDown(e);
  };

  const style: React.CSSProperties =
    disabled || loading ? { pointerEvents: 'none' } : {};

  return {
    a11yProps: {
      'aria-label': isIconOnly ? ariaLabel : undefined,
      'aria-disabled': disabled || loading ? true : undefined,
      'aria-busy': loading ? true : undefined,
      'aria-describedby': loading ? loadingId : undefined,
      disabled: disabled || loading,
      onKeyDown: handleKeyDown,
      style,
    },
    loadingId,
    isIconOnly,
  };
}
