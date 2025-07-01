import { ReactNode } from 'react';

export type BadgeVariant = 'dot' | 'numeric';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: BadgeVariant;
  content?: string;
  maxContent?: number;
  ariaLabel?: string;
}
export interface BadgeContainerProps extends BadgeProps {
  children: ReactNode;
  position?: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start';
}

export type UseBadgeA11yProps = BadgeProps;
