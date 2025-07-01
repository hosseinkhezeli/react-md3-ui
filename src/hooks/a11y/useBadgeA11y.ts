import { useEffect, useMemo } from 'react';
import { UseBadgeA11yProps } from '../../types/components/badge.types';

export function useBadgeA11y({
  variant = 'dot',
  content,
  maxContent = 99,
  ariaLabel,
}: UseBadgeA11yProps) {
  const isNumeric = variant === 'numeric';

  const display = useMemo(() => {
    if (!isNumeric) return '';
    if (content) {
      return Number(content) > maxContent ? `${maxContent}+` : `${content}`;
    }
    return String(content ?? '');
  }, [isNumeric, content, maxContent]);

  const label =
    ariaLabel ?? isNumeric
      ? `Badge with ${display} items`
      : 'Notification badge';


  return {
    display,
    a11yProps: {
      role: 'status',
      'aria-label': label,
    },
  };
}
