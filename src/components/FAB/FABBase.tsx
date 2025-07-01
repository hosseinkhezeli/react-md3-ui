import { useFabA11y } from '../../hooks/a11y/useFABA11y';
import { FABBaseProps } from '../../types/components/fab.types';

export function FABBase({
  icon,
  label,
  lowered = false,
  variant = 'primary',
  size = 'medium',
  ariaLabel,
  extended = false,
  ...props
}: FABBaseProps) {
  const isExtended = extended && label;
  const { a11yProps } = useFabA11y({ label, ariaLabel });

  return (
    <button
      {...props}
      {...a11yProps}
      data-variant={variant}
      data-size={size}
      data-lowered={lowered || undefined}
      data-extended={isExtended || undefined}
      type={props.type ?? 'button'}
      className={`md3-fab ${props.className ?? ''}`.trim()}
    >
      <span className='md3-fab__icon'>{icon}</span>
      {isExtended && <span className='md3-fab__label'>{label}</span>}
    </button>
  );
}
