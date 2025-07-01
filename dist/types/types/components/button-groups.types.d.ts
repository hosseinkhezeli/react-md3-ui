import { ReactNode } from 'react';
import { ButtonShape, ButtonSize, ButtonVariant } from './button.types';
export type ButtonGroupType = 'standard' | 'connected';
export interface ButtonGroupProps extends Partial<UseButtonGroupA11yOptions> {
    children: ReactNode[];
    size?: ButtonSize;
    variant?: ButtonVariant;
    shape?: ButtonShape;
}
export interface UseButtonGroupA11yOptions {
    count: number;
    type: ButtonGroupType;
    selectedIndices: number[];
    onSelect?: (indices: number[]) => void;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}
