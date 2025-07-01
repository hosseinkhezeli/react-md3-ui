import { useBadgeA11y } from '../../hooks/a11y/useBadgeA11y';
import '../../styles/components/Badge.css';

import { BadgeProps } from '../../types/components/badge.types';

export function Badge({
  variant = 'dot',
  content,
  maxContent = 99,
  ariaLabel,
  ...props
}: BadgeProps) {
  const { a11yProps, display } = useBadgeA11y({
    variant,
    content,
    maxContent,
    ariaLabel,
  });

  return (
    <span
      {...props}
      {...a11yProps}
      data-variant={variant}
      className={`md3-badge md3-badge--${variant} ${props.className ?? ''}`}
    >
      {display}
    </span>
  );
}
