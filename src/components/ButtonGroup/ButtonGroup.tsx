import { Children, cloneElement, isValidElement, FC } from 'react';
import '../../styles/components/ButtonGroup.css';
import { useButtonGroupA11y } from '../../hooks/a11y/useButtonGroupA11y';
import { ButtonGroupProps } from '../../types/components/button-groups.types';

export function ButtonGroup({
  children,
  count = Children.count(children),
  type = 'standard',
  selectedIndices = [],
  onSelect,
  ariaLabel,
  ariaLabelledBy,
  size = 'md',
  variant = 'outlined',
  shape = 'round',
}: ButtonGroupProps) {
  const { getGroupProps, getItemProps } = useButtonGroupA11y({
    count,
    type,
    selectedIndices,
    onSelect,
    ariaLabel,
    ariaLabelledBy,
  });

  return (
    <div
      className='md3-btn-group'
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-shape={shape}
      {...getGroupProps()}
    >
      {Children.map(children, (child, idx) => {
        if (!isValidElement<ButtonGroupProps>(child)) return null;

        const itemProps = getItemProps(idx);


        return cloneElement(child, {
          variant,
          size,
          shape,
          ...child.props,
          ...itemProps,
        });
      })}
    </div>
  );
}
