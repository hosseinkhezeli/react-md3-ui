import { BadgeContainerProps } from '../../types/components/badge.types';
import { Badge } from './Badge';
import '../../styles/components/BadgeContainer.css';

export function BadgeContainer({
  children,
  position = 'top-end',
  ...badgeProps
}: BadgeContainerProps) {
  return (
    <span data-position={position} className={`md3-badge-container`}>
      {children}
      <Badge {...badgeProps} />
    </span>
  );
}
