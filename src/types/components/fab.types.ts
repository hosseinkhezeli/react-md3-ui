import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface UseFabA11yProps {
  label?: string;
  ariaLabel?: string;
}

export type FABProps = Omit<FABBaseProps, 'extended'>;

export type ExtendedFABProps = FABBaseProps;

export type FabVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type FabSize = 'small' | 'medium' | 'large';

export interface FABBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  lowered?: boolean;
  variant?: FabVariant;
  size?: FabSize;
  ariaLabel?: string;
  extended?: boolean;
  label?: string;
  rounded?:boolean
}
