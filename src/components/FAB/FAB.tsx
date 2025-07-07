import { FABProps } from '../../types/components/fab.types';
import { FABBase } from './FABBase';
import '../../styles/components/FAB.css';

export function FAB({
  icon,
  lowered,
  variant,
  size,
  ariaLabel,
  ...props
}: FABProps) {
  return (
    <FABBase
      icon={icon}
      lowered={lowered}
      variant={variant}
      size={size}
      ariaLabel={ariaLabel}
      {...props}
    />
  );
}
