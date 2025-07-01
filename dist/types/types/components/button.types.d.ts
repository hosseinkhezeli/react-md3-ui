import { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant = 'contained' | 'outlined' | 'elevated' | 'tonal' | 'text';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'round' | 'square';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    loading?: boolean;
    loadingIndicator?: ReactNode;
    selected?: boolean;
    'aria-label'?: string;
}
export interface UseButtonA11yProps {
    children?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    ariaLabel?: string | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}
export interface UseButtonA11yReturn {
    a11yProps: {
        'aria-label'?: string;
        'aria-disabled'?: boolean;
        'aria-busy'?: boolean;
        'aria-describedby'?: string;
        disabled?: boolean;
        onKeyDown: React.KeyboardEventHandler<HTMLButtonElement>;
        style?: React.CSSProperties;
    };
    loadingId: string;
    isIconOnly: boolean;
}
