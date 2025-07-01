import '../../styles/components/Button.css';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { useButtonA11y } from '../../hooks/a11y/useButtonA11y';
import { ButtonProps } from '../../types/components/button.types';

export function Button({
  variant = 'contained',
  size = 'sm',
  shape = 'round',
  loading,
  children,
  loadingIndicator,
  selected,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) {
  const { a11yProps, loadingId } = useButtonA11y({
    children,
    loading,
    disabled: props.disabled,
    ariaLabel,
    onKeyDown: props.onKeyDown,
  });

  return (
    <button
      data-state={
        selected === undefined
          ? undefined
          : selected
          ? 'selected'
          : 'unselected'
      }
      {...props}
      {...a11yProps}
      type={props.type ?? 'button'}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      className={`md3-btn ${props.className ?? ''}`}
      aria-describedby={loading ? loadingId : undefined}
    >
      {children}
      {loading &&
        (loadingIndicator ?? (
          <span
            id={loadingId}
            role='status'
            aria-live='polite'
            className='loading-indicator-container'
          >
            <LoadingIndicator />
          </span>
        ))}
    </button>
  );
}
