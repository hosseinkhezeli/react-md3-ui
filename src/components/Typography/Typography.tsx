import React, { JSX } from 'react';
import '../../styles/components/Typography.css';

export type TypographyVariant =
  | 'display-large'
  | 'headline-medium'
  | 'title-small'
  | 'label-large'
  | 'body-medium'
  | 'body-small';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  as: Component = 'span',
  variant = 'body-medium',
  children,
  className = '',
}: Props) => {
  return (
    <Component className={`md3-typography ${variant} ${className}`}>
      {children}
    </Component>
  );
};
